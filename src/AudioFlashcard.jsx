import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const AudioFlashcard = () => {
  const [audioData, setAudioData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("Tất cả");
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [currentAudio, setCurrentAudio] = useState(null);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    fetch("/Data.json")
      .then((response) => response.json())
      .then((data) => {
        setAudioData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const handleTopicChange = (event) => {
    const topic = event.target.value;
    setSelectedTopic(topic);
    setFilteredData(
      topic === "Tất cả"
        ? audioData
        : audioData.filter((item) => item.Topic === topic)
    );
  };

  const handlePlayAudio = (src) => {
    if (currentAudio === src) {
      if (audioRef.current.paused) {
        audioRef.current.play(); // Play if it's paused
      } else {
        audioRef.current.currentTime = 0; // Reset to start
        audioRef.current.play(); // Replay from the beginning
      }
    } else {
      audioRef.current.src = src;
      audioRef.current.play();
      setCurrentAudio(src);
    }
    audioRef.current.playbackRate = playbackSpeed;
  };
  
  return (
    <div className="flashcard-page">
      <div className="topic-filter">
        <label htmlFor="topic">Chọn chủ đề:</label>
        <select id="topic" value={selectedTopic} onChange={handleTopicChange}>
          <option value="Tất cả">Tất cả</option>
          {Array.from(new Set(audioData.map((item) => item.Topic))).map(
            (topic, index) => (
              <option key={index} value={topic}>
                {topic}
              </option>
            )
          )}
        </select>
      </div>

      <div className="flashcard-container">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.ID} className="flashcard">
              <div className="flashcard-content">
                <h2>{item.Word}</h2>
                <p>{item.Meaning}</p>
                {item.Audio && (
                  <div className="audio-section">
                    <button
                      onClick={() => handlePlayAudio(item.Audio)}
                      className="play-button" // Thay đổi lớp ở đây
                    >
                      {currentAudio === item.Audio && !audioRef.current.paused
                        ? "Replay"
                        : "Play"}
                    </button>
                    <div className="speed-control">
                      <label>Tốc độ:</label>
                      <input
                        type="range"
                        min="0.25"
                        max="2"
                        step="0.1"
                        value={playbackSpeed}
                        onChange={(e) =>
                          setPlaybackSpeed(parseFloat(e.target.value))
                        }
                      />
                      <span>{playbackSpeed}x</span>
                    </div>
                  </div>
                )}
              </div>
              <Link to={`/flashcards/${item.ID}`} className="details-link">
                Xem chi tiết
              </Link>
            </div>
          ))
        ) : (
          <p>Không có thẻ nào cho chủ đề này.</p>
        )}
      </div>
    </div>
  );
};

export default AudioFlashcard;
