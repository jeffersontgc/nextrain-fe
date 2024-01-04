import React from "react";
import { NextPage } from "next";

const Header: React.FC = () => {
  return (
    <header style={{ background: "#333", color: "#fff", padding: "1rem" }}>
      <h1>My Simple Header</h1>
    </header>
  );
};

const App: NextPage = () => {
  return (
    <div>
      <Header />
      <h1>Johnny Briones</h1>
      {/* Resto de tu contenido */}
    </div>
  );
};

export default App;
