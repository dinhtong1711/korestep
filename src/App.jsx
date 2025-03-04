import { Routes, Route } from 'react-router-dom';
import AudioFlashcard from './AudioFlashcard.jsx';
import FlashcardPage from './FlashcardPage.jsx';
import './App.css';
import Footer from './Footer';
function App() {
  return (
    <Routes>
      <Route path="/" element={<AudioFlashcard />} />
      <Route path="/flashcards/:id" element={<FlashcardPage />} />
      <Footer />
    </Routes>
  );
}

export default App;