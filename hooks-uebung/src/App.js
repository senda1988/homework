import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [colour, setColour] = useState("White")
  const [blend, setBlend] = useState(false)
  const [zahl, setZahl] = useState(count);
  const [seconds, setSeconds] = useState(0);

  // Start timer when the component mounts
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Clear timer when component unmounts
    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
    console.log('HIIIII useEffect')
  },
    [zahl]
  )
  return (
    <>
      <div style={{ backgroundColor: colour }}>
        <p> {seconds} seconds</p>
        <button onClick={() => setCount(count + 1)}>count Click</button >
        <button onClick={() => setColour("#3D8CA3")}>Background Blue</button>
        <button onClick={() => setColour("white")}>Background White</button>

        <p>{count}</p>
        <button onClick={() => setBlend(!blend)}>Toggle‑Button</button>
        <p style={{ display: blend ? 'block' : 'none' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><br></br>
        <button onClick={() => { setZahl(zahl + 1) }}>+</button>
        <button onClick={() => { setZahl(zahl - 1) }}>-</button>
        <p>{zahl}</p>



      </div>
    </>
  );
}

export default App;
