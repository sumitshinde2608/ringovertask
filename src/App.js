import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <div style={{ width: "100%", hieght: "100%" }}>
      <Navbar className="navbar" />
      <Contact id="pages" />
    </div>
  );
};

export default App;
