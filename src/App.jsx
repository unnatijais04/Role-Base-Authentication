import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Blogs from "./components/Blogs";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Sync dark mode with <html> class
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Padding top = navbar height */}
      <main className="pt-16 bg-white dark:bg-black min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
