import React, {useEffect, useRef, useState} from 'react';
import './Datecard.css';

const Datecard = ({date}) => {
    const inputEl = useRef(null);
    const [sticky, setSticky] = useState();
    const handleScroll = () => setSticky(inputEl.current.getBoundingClientRect().y)

    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll())

    }, [sticky])


    return (
        <div ref={inputEl}  className={sticky <= 10 ? 'datecard sticky' : 'datecard'}>
            {date}
        </div>
    );
};

export default Datecard;