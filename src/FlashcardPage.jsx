import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css"; // Đảm bảo rằng CSS được import đúng
import Footer from './Footer'; // Đảm bảo đường dẫn đúng
import Navbar from "./Navbar"; // Import Navbar
const FlashcardPage = () => {
  const { id } = useParams();
  const [flashcard, setFlashcard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/Data.json") // Đảm bảo tệp JSON nằm trong thư mục public
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const foundCard = data.find((item) => item.id === parseInt(id));
        if (foundCard) {
          setFlashcard(foundCard);
        } else {
          setError("Không tìm thấy thẻ flashcard");
        }
      })
      .catch((error) => setError("Lỗi loading data: " + error.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flashcard-detail-page">
    
      <h1>{flashcard.word}</h1>
      <p>{flashcard.meaning}</p>
      <div className="audio-container">
        {flashcard.audio && (
          <audio controls>
            <source src={flashcard.audio} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default FlashcardPage;