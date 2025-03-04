import { Routes, Route } from 'react-router-dom';
import AudioFlashcard from './AudioFlashcard.jsx';
import FlashcardPage from './FlashcardPage.jsx';
import Footer from './Footer.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AudioFlashcard />} />
        <Route path="/flashcards/:id" element={<FlashcardPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;