import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Titel from './Titel';

import ActionAreaCard from './ActionAreaCard';
import BasicMenu from './BasicMenu';
import FreeSolo from './FreeSolo';

const root = ReactDOM.createRoot(document.getElementById('root'));
const tiere = [
  { name: 'Miau', art: "Katze", krankheit: "husten" },
  { name: 'Bobi', art: "Hund", krankheit: "gesund" },
  { name: 'Shai', art: "Vogel", krankheit: "gesund" },
  { name: 'lala', art: "Katze", krankheit: "gesund" },
];
root.render(
  <React.StrictMode>

    <App />

    <BasicMenu />
    <FreeSolo props={tiere} />
    <Titel />

    <div class="cardDiv">
      <ActionAreaCard name="Miau" art="Katze" krankheit="husten" image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hauskatze_langhaar.jpg/1200px-Hauskatze_langhaar.jpg" />
      <ActionAreaCard name="Bobi" art="Hund" krankheit="gesund" image="https://www.tierschutzbund.de/fileadmin/_processed_/7/c/csm_schwarzer_Hund_auf_Wiese_c_xkunclova-Shutterstock_01_5566a80d25.jpg" />
      <ActionAreaCard name="Shai" art="Vogel" krankheit="gesund" image="https://www.bund-naturschutz.de/fileadmin/_processed_/b/a/csm_Vogel_im_Baum_Fotolia_K.-U._Hae%C3%9Fler_22454253_M_3a628fe5cd.jpg" />
      <ActionAreaCard name="lala" art="Katze" krankheit="gesund" image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hauskatze_langhaar.jpg/1200px-Hauskatze_langhaar.jpg" />

    </div>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
