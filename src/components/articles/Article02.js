import React from 'react';
import './Articles.css';
import {TH03} from '../images';

const Article02 = ({article02Data}) => {
    return (
        <article className="article-content-box">
            <h1 className="article-1__time">{article02Data.time}</h1>
            <img src={TH03} alt="Thore Hansen" />
            <h1 className="article-1__header">{article02Data.title}</h1>
            <h2 className="article-1__ingress">{article02Data.ingress}</h2>
            <h3 className="article-1__byline">Skrevet av <i>{article02Data.author}</i></h3>
            <h4 className="article-1__additional-info">1 of 7 <u>Overgrowth</u></h4>   
        </article>
    );
};

export default Article02;