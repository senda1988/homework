import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Senda"
  const zahl1 = 5
  const zahl2 = 20
  function addieren(zahl1, zahl2) {
    return zahl1 + zahl2
  }
  const stilcss = { fontSize: "30px", fontWeight: "bold", color: "red" }
  return (
    <>
      {/* commentar strg + k + c */}
      <h1>Hallo</h1>
      <p>Hallo aus dem P tag</p>
      <h2>Hallo liebe {name}</h2>
      <form>
        <input type="number" placeholder="zahl1" value={zahl1}></input><br />
        <input type="number" placeholder="zahl2" value={zahl2}></input><br />
        <button type="submit">addieren</button>
      </form>

      <p style={stilcss}>Result= {addieren(zahl1, zahl2)}</p>
    </>

  );
}

export default App;
