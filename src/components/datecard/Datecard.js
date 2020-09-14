import React from 'react';
import './Datecard.css';

const Datecard = ({date}) => {
    return (
        <div className="datecard">
            {date}
        </div>
    );
};

export default Datecard;