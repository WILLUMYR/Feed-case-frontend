import React, {useState} from 'react';
import './Filter.css';

const Filter = () => {
    // const [filterArticles, setFilterArticles] = useState('');

    // const handleButtonPress = (event) => {
    // } 

    
    return (
        <nav className="filter">
            <button className="filter__button"> Essay </button>
            <button className="filter__button"> Podcast </button>
            <button className="filter__button"> Film </button>
            <button className="filter__button"> Seminar </button>
            <button className="filter__button"> Lyd </button>
            <button className="filter__button"> English </button>
        </nav>
    );
};

export default Filter;
