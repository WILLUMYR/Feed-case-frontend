import React, {useState} from 'react';
import './Event.css';

const Events = ({timeToEvent}) => {
    const [time, setTime] = useState(0); 
    
    const countDownDate = new Date(timeToEvent).getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / (1000))
        const dateString = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
        setTime(dateString);
    }, 1000)

    return (
        <div className="events__card">
        <h2>{time}</h2>
            <div className="card__info">
                <h5>Kortfilmtittel om noe kult</h5>
                <h6>1 av 7 <u>Kortfilmserie</u></h6>
            </div>
        </div>
    );
};

export default Events;