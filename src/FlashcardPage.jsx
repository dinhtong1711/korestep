import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

const FlashcardPage = () => {
  const { id } = useParams();
  const [flashcard, setFlashcard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    fetch("/Data.json")
      .then(response => response.json())
      .then(data => {
        const foundCard = data.find(item => item.ID === parseInt(id));
        if (foundCard) {
          setFlashcard(foundCard);
        } else {
          setError("Không tìm thấy thẻ flashcard");
        }
      })
      .catch(error => setError("Lỗi loading data: " + error.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flashcard-detail-page">
      <h1>{flashcard.Word}</h1>
      <p>{flashcard.Meaning}</p>
      <p>{flashcard["Example(Korean)"]}</p>
      <p>{flashcard["Example(Vietnamese)"]}</p>
      
      {flashcard.Audio && (
        <div className="audio-container">
          <audio ref={audioRef} controls>
            <source src={flashcard.Audio} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <div className="speed-control">
            <label>Tốc độ:</label>
            <input
              type="range"
              min="0.25"
              max="2"
              step="0.1"
              value={playbackSpeed}
              onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
            />
            <span>{playbackSpeed}x</span>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default FlashcardPage;
