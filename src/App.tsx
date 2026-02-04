import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader"; // Import the new Loader

const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(true);

  // Sync the 'dark' class with Tailwind's darkMode: 'class' strategy
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <Router>
      {/* 1. Loader: Sits at the very top of the stack */}
      <Loader />

      {/* 2. Global UI Elements */}
      <CustomCursor />
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      {/* 3. Page Routes */}
      <Routes>
        <Route path="/" element={<Home isDark={isDark} />} />
        <Route
          path="/project/:id"
          element={<ProjectDetail isDark={isDark} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
