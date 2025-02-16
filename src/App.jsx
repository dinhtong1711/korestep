import 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import AudioFlashcard from './AudioFlashcard'; // Trang hiển thị danh sách flashcards
import FlashcardPage from './FlashcardPage'; // Trang chi tiết flashcard

function App() {
  return (
    <Router>
      <div className="App">
      <h1>Chào mừng bạn đến với Flashcard 🚀</h1>
        {/* Định nghĩa các route */}
        <Routes>
          {/* Trang hiển thị danh sách flashcards */}
          <Route path="/" element={<AudioFlashcard />} />

          {/* Trang chi tiết flashcard, sử dụng ID từ URL */}
          <Route path="/flashcards/:id" element={<FlashcardPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
