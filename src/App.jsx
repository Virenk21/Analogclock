import React from 'react';
import Clock from "./Components/Clock";
import themes from "./Components/themes";
import "./Components/Clock.css";
import "./Components/themes.css";

function App() {
  return (
    <>
      <div className="container">
        <Clock />
        <themes />
        <index />
      </div>
    </>
  );
}

export default App;
