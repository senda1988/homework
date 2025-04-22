import './App.css';
import { useState } from 'react';
import ListTier from './ListTier';

function App() {
  const [anzahl, setAnzahl] = useState(2);
  const tiere = [
    { Id: 1, name: 'Miau', art: "Katze", krankheit: "husten", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hauskatze_langhaar.jpg/1200px-Hauskatze_langhaar.jpg" },
    { Id: 2, name: 'Bobi', art: "Hund", krankheit: "gesund", image: "https://www.tierschutzbund.de/fileadmin/_processed_/7/c/csm_schwarzer_Hund_auf_Wiese_c_xkunclova-Shutterstock_01_f2d4be8ef4.jpg" },
    { Id: 3, name: 'Shai', art: "Vogel", krankheit: "gesund", image: "https://vogelmonitoring-rlp.de/wp-content/uploads/2019/04/Blaumeise_20D_07440.jpg" },
    { Id: 4, name: 'lala', art: "Katze", krankheit: "gesund", image: "https://media.4-paws.org/a/5/c/4/a5c4c9cdfd3a8ecb58e9b1a5bd496c9dfbc3cedc/VIER%20PFOTEN_2020-10-07_00132-2890x2000-1920x1329.jpg" },
    { Id: 5, name: 'Miau', art: "Katze", krankheit: "husten", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hauskatze_langhaar.jpg/1200px-Hauskatze_langhaar.jpg" },
    { Id: 6, name: 'Bobi', art: "Hund", krankheit: "gesund", image: "https://www.tierschutzbund.de/fileadmin/_processed_/7/c/csm_schwarzer_Hund_auf_Wiese_c_xkunclova-Shutterstock_01_f2d4be8ef4.jpg" },]
  return (
    <>


      <div className='pageTitel'><h1>Hallo</h1></div>
      <div className="Container">
        <div className="ContainCard">
          {tiere.slice(0, anzahl).map((tier) =>
            <ListTier key={tier.Id} name={tier.name} art={tier.art} krankheit={tier.krankheit} image={tier.image}> </ListTier>
          )}
        </div>
        <div className='btnLoad'><button onClick={() => setAnzahl(anzahl + 2)}>Mehr anzeigen</button></div>

      </div>


    </>);
}

export default App;
