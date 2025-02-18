import { Facebook, Instagram } from "lucide-react";
import "./App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cột 4: Kết nối mạng xã hội */}
        <div className="footer-column">
          
          <div className="social-icons">
            <a href="#"><Facebook /></a>
            <a href="#"><Instagram /></a>
            
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 KoreanStep.</p>
      </div>
    </footer>
  );
}
