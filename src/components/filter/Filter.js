import React from 'react';
import './Filter.css';

const Filter = ({windowWidth}) => {
    if(windowWidth <= 1024) return (
        <nav className="filter">
            <h2>Filter</h2>
            <button className="filter__button"> Essay </button>
            <button className="filter__button"> Podcast </button>
            <button className="filter__button"> Film </button>
            <button className="filter__button"> Seminar </button>
            <button className="filter__button"> Lyd </button>
            <button className="filter__button"> English </button>
        </nav>
    );
    return (
        <nav className="filter">
            <button className="filter__button"> Essay </button>
            <button className="filter__button"> Podcast </button>
            <button className="filter__button"> Film </button>
            <button className="filter__button"> Seminar </button>
            <button className="filter__button"> Lyd </button>
            <button className="filter__button"> English </button>
        </nav>
    )
};

export default Filter;
