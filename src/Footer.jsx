import { Facebook, Instagram } from "lucide-react";
import "./App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cột 4: Kết nối mạng xã hội */}
        <div className="footer-column">
          
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61567718402849"><Facebook /></a>
            <a href="https://www.instagram.com/koreanstep1711/"><Instagram /></a>
            
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
