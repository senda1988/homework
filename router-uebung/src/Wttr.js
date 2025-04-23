import React, { useEffect, useState } from 'react';
import WttrCard from './WttrCard';

function Wttr() {
    const cities = ["Paris", "New York", "Tokyo", "Berlin", "Cairo", "Munich"];

    const [weatherList, setWeatherList] = useState([]);
    useEffect(() => {
        let tempWeatherList = [];
        cities.forEach(city => {
            fetch(`https://wttr.in/${city}?format=j1`)
                .then(res => res.json())
                .then((data) => {
                    tempWeatherList.push({

                        data: data
                    });
                    if (tempWeatherList.length === cities.length) {
                        setWeatherList(tempWeatherList);
                    }
                })
        });
    }, []);

    if (weatherList.length === 0) {
        return <p>Temperatur Load..</p>;
    }
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', "grid-column": "-1/1", 'margin-top': '150px' }}>
            {weatherList.map((item, index) => {
                const weather = item.data;
                return (
                    <WttrCard
                        key={index}
                        NameCity={weather.nearest_area[0].areaName[0].value}
                        NameCountry={weather.nearest_area[0].country[0].value}
                        Temp={weather.current_condition[0].temp_C}
                    />
                );
            })}
        </div>
    )
}

export default Wttr