import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow dark:bg-gray-800">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        Task Management Dashboard
      </h1>

      <button
        onClick={toggleDarkMode}
        className="rounded-lg bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default Navbar;