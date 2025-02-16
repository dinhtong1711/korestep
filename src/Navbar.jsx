import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <button className="p-2">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <Link to="/" className="flex items-center ml-2">
          <img src="https://www.svgrepo.com/show/303115/youtube-logo.svg" alt="YouTube" className="w-8 h-8" />
          <span className="ml-1 text-lg font-semibold">Flashcard</span>
        </Link>
      </div>

      <div className="flex-grow max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-1 rounded-full bg-gray-900 text-white focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a9 9 0 11-14.8 0" />
          </svg>
        </button>
        <button className="bg-gray-800 px-4 py-1 rounded-full">Create</button>
      </div>
    </nav>
  );
};

export default Navbar;
