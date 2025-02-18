// import { useState } from "react";
// import { Sun, Moon, Menu } from "lucide-react";
// import "./App.css"; // Import file CSS riêng

// export default function Navbar() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className={`navbar ${darkMode ? "dark" : ""}`}>
//       {/* Logo */}
//       <div className="logo">KoreanStep</div>

//       {/* Nút chuyển dark mode */}
//       <button onClick={() => setDarkMode(!darkMode)} className="theme-btn">
//         {darkMode ? <Sun className="icon" /> : <Moon className="icon" />}
//       </button>

//       {/* Nút menu mobile */}
//       <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
//         <Menu className="icon" />
//       </button>
//     </nav>
//   );
// }