import React from 'react';
import './Events.css';

const Events = ({time}) => {
    return (
        <section className="events">
            <div className="events__card">
                <h2>{time}</h2>
                {/* <div></div> */}
                <div className="card__info">
                    <h5>Kortfilmtittel om noe kult</h5>
                    <h6>1 av 7 <u>Kortfilmserie</u></h6>
                </div>
            </div>
            <div className="events__card">
                <h2>{time}</h2>
                {/* <div></div> */}
                <div className="card__info">
                    <h5>Kortfilmtittel om noe kult</h5>
                    <h6>1 av 7 <u>Kortfilmserie</u></h6>
                </div>
            </div>
        </section>
    );
};

export default Events;