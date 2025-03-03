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
    .then(response => {
      if (!response.ok) throw new Error(`Lỗi ${response.status}: Không thể tải dữ liệu`);
      return response.json();
    })
    .then(data => setFlashcard(data.find(item => item.ID === Number(id))))
    .catch(error => setError(error.message))
    .finally(() => setLoading(false));
}, [id]);  

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  if (loading) return <div>🔄 Đang tải...</div>;
  if (error) return <div className="error">❌ {error}</div>;

  return (
    <div className="flashcard-detail-page">
      <h1>{flashcard?.Word || "Không có dữ liệu"}</h1>
      <p><strong>Nghĩa:</strong> {flashcard?.Meaning || "Không có dữ liệu"}</p>
      <p><strong>Ví dụ (KR):</strong> {flashcard?.["Example(Korean)"] || "Không có dữ liệu"}</p>
      <p><strong>Ví dụ (VN):</strong> {flashcard?.["Example(Vietnamese)"] || "Không có dữ liệu"}</p>

      {flashcard?.Audio && (
        <div className="audio-container">
          <audio ref={audioRef} controls>
            <source src={flashcard.Audio} type="audio/wav" />
            Trình duyệt của bạn không hỗ trợ phát âm thanh.
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
