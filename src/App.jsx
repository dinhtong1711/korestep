import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Sử dụng Routes thay vì Switch
// import Navbar from "./Navbar";
import AudioFlashcard from './AudioFlashcard';
import FlashcardPage from './FlashcardPage';
import Footer from './Footer';
function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      {/* <Navbar /> */}
      <Routes> {/* Sử dụng Routes thay vì Switch */}
        <Route path="/flashcards/:id" element={<FlashcardPage />} />
        <Route path="/" element={<AudioFlashcard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;