import './App.css';
import { useState } from 'react';
import ListTier from './ListTier';

function App() {
  const [anzahl, setAnzahl] = useState(2);
  const tiere = [
    { Id: 1, name: 'Miau', art: "Katze", krankheit: "husten", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hauskatze_langhaar.jpg/1200px-Hauskatze_langhaar.jpg" },
    { Id: 2, name: 'Bobi', art: "Hund", krankheit: "gesund", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hauskatze_langhaar.jpg/1200px-Hauskatze_langhaar.jpg" },
    { Id: 3, name: 'Shai', art: "Vogel", krankheit: "gesund", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hauskatze_langhaar.jpg/1200px-Hauskatze_langhaar.jpg" },
    { Id: 4, name: 'lala', art: "Katze", krankheit: "gesund", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hauskatze_langhaar.jpg/1200px-Hauskatze_langhaar.jpg" },
  ]
  return (
    <>


      <h1>Hallo</h1>
      <div className="Container">
        {tiere.slice(0, anzahl).map((tier) =>
          <ListTier key={tier.Id} name={tier.name} art={tier.art} krankheit={tier.krankheit} image={tier.image}> </ListTier>
        )}
        <button onClick={() => setAnzahl(anzahl + 1)}>Mehr anzeigen</button>
      </div>


    </>);
}

export default App;
