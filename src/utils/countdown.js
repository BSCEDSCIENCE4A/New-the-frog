
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function CountDown({ minutes = 0, seconds = 0 }) {
    const navigate = useNavigate();
    const [over, setOver] = useState(false);
    const [[m, s], setTime] = useState([minutes, seconds]);

    const tick = () => {
        if (over) return;
        if (m === 0 && s === 0) setOver(true);
        if (s === 0) {
            setTime([m - 1, 59]);
        } else {
            setTime([m, s - 1]);
        }
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });
    return (
        <div>
            <p style={{
                fontSize: '2rem',
                opacity: '0.8',
                fontFamily: 'Varela Round',
                color: 'white',
                padding: 1
            }}>{`${m
                .toString()
                .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
            <div>{over ? navigate('/scoreboard') : ('')}</div>
        </div>
    )
}