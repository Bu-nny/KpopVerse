
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import WelcomeBanner from "./components/WelcomeBanner";
import NewsSection from "./components/NewsSection";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar toggleDark={() => setDarkMode(!darkMode)} />
      <WelcomeBanner />
      <NewsSection />
    </div>
  );
}

export default App;
