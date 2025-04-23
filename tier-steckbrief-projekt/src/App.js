import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [zahl, setZahl] = useState(15)
  const [colour, setColour] = useState("red")
  const colors = ["red", "blue", "green", "purple", "orange", "pink", "yellow", "teal"];

  const changeColorRandomly = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColour(colors[randomIndex]);
  };
  return (
    <>
      <button onClick={() => setZahl(zahl + 1)}>+</button>
      <p style={{ color: colour }}>{zahl}</p>
      <button onClick={() => {
        setColour("blue")
      }}>Farbe Ändern</button>
      <button onClick={changeColorRandomly}>Farbe Ändern randomly</button>
    </>
  );
}

export default App;
