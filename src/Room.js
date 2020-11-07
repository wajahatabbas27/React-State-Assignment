import React, { useState } from 'react';
import './Room.css';

function Room() {
    let [light, setLight] = useState(true);
    let [temp, setTemp] = useState(72);
    return (
        <div className={`room ${light ? "on" : "off"}`}>
            The light is {light ? "on" : "off"}
            <br />
            <button onClick={() => {
                console.log("on button clicked")
                setLight(!light);
            }}>On</button>

            <button onClick={() => {
                console.log("off button clicked")
                setLight(!light);
            }}>Off</button>


            <br />

            The Temperature is : {temp}
            <br />

            <button onClick={() => {
                console.log("temperature increment ++");
                setTemp(++temp);
            }}>+</button>

            <button onClick={() => {
                console.log("temperature decrement --");
                setTemp(--temp);
            }}>-</button>


        </div>
    );
}

export default Room;
