import React from 'react';
import './WttrCard.css'

function WttrCard(props) {
    return (
        <div className="card">
            <h3>Contry: {props.NameCountry}</h3>
            <p>City: {props.NameCity}</p>
            <p className="temp">Temperatur: {props.Temp} °C</p>
        </div>
    )
}

export default WttrCard