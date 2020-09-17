import React, {useEffect, useRef, useState} from 'react';
import './Datecard.css';

const Datecard = ({date, setDay, prevDay}) => {
    const inputEl = useRef(null);
    const [sticky, setSticky] = useState();
    
    const handleScroll = () => setSticky(inputEl.current.getBoundingClientRect().y)

    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll())
        if (sticky <= 10) {
            const currentDay = date.replace(/ .*/,'');
            setDay(currentDay);
        }
        if (sticky > 10) setDay(prevDay);
    }, [sticky, setDay, date, prevDay])


    return (
        <div ref={inputEl}  className={sticky <= 10 ? 'datecard sticky' : 'datecard'}>
            {date}
        </div>
    );
};

export default Datecard;