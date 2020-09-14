import React from 'react';
import './Articles.css';

const Article01 = () => {
    return (
        <article className="article-1">
            <h1 className="article-1__time">kl. 10:00</h1>
            <div className="article-1__image"></div>
            <h1 className="article-1__header">Hvordan planlegger vi byene våre i 2052?</h1>
            <h2 className="article-1__ingress">Det er 20 år og syv festivaler siden Oslo arkitekturtriennale ble etablert i 2000. Det skal feires med en hel jubileumsuke 12.-18. oktober, fylt med program både til frokost, lunsj og kvelds, på nett og fysisk i byen - hvis koronasituasjonen tillater det.</h2>
            <h3 className="article-1__byline">Skrevet av <i>Tristan Boniver</i></h3>
            <h4 className="article-1__additional-info">1 of 7 <u>Overgrowth</u></h4>   
        </article>
    );
};

export default Article01;