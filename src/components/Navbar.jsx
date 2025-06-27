
import React from "react";

function Navbar({ toggleDark }) {
  return (
    <nav>
      <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>KpopVerse</div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={toggleDark}>Toggle Dark Mode</button>
        <button>Games</button>
        <button>News</button>
        <input placeholder="Search..." />
      </div>
    </nav>
  );
}

export default Navbar;
