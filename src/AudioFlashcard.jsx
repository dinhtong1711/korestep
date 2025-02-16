import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Footer from './Footer';
// import Navbar from "./Navbar"; // Import Navbar
const AudioFlashcard = () => {
  const [audioData, setAudioData] = useState([]);

  useEffect(() => {
    fetch("/Data.json") // Đảm bảo tệp JSON nằm trong thư mục public
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setAudioData(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="flashcard-page">
      
      <div className="flashcard-container">
        {audioData.length > 0 ? (
          audioData.map((item) => (
            <div key={item.id} className="flashcard">
              <div className="flashcard-content">
                <h2>{item.word}</h2>
                <p>{item.meaning}</p>
                {item.audio && (
                  <audio controls>
                    <source src={item.audio} type="audio/wav" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
              <Link to={`/flashcards/${item.id}`} className="details-link">
                Xem chi tiết
              </Link>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AudioFlashcard;