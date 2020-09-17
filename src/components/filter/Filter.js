import React from 'react';
import './Filter.css';

const Filter = ({windowWidth}) => {
    if(windowWidth <= 1024) return (
        <nav className="filter">
            <h2>Filter</h2>
            <div className="filter__buttons">
                <button className="filter__button"> Essay </button>
                <button className="filter__button"> Podcast </button>
                <button className="filter__button"> Film </button>
                <button className="filter__button"> Seminar </button>
                <button className="filter__button"> Lyd </button>
                <button className="filter__button"> English </button>
            </div>
        </nav>
    );
    return (
        <nav className="filter">
            <div className="filter__buttons">
                <button className="filter__button"> Essay </button>
                <button className="filter__button"> Podcast </button>
                <button className="filter__button"> Film </button>
                <button className="filter__button"> Seminar </button>
                <button className="filter__button"> Lyd </button>
                <button className="filter__button"> English </button>
            </div>
        </nav>
    )
};

export default Filter;
