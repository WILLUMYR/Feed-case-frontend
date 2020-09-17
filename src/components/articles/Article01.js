import React from 'react';
import './Articles.css';
import {TH02} from '../images';

const Article01 = ({article01Data}) => {
    return (
        <article className="article-content-box">
            <h1 className="article-1__time">{article01Data.time}</h1>
            <img src={TH02} alt="Thore Hansen"/>
            <h1 className="article-1__header">{article01Data.title}</h1>
            <h2 className="article-1__ingress">{article01Data.ingress}</h2>
            <h3 className="article-1__byline">Skrevet av <i>{article01Data.author}</i></h3>
            <h4 className="article-1__additional-info">1 of 7 <u>Overgrowth</u></h4>   
        </article>
    );
};

export default Article01;