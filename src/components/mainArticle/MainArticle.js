import React from 'react';
import './MainArticle.css';

const MainArticle = ({windowWidth}) => {
    if (windowWidth > 1024) return (
        <section className="main-article">
        <div className="main-article__image">
            <div className="live-card">
                <div className="live-circle"></div>
                <h5>Live nå!</h5>
            </div>
        </div>
        <article className="main-article__content">
            <h1 className="content__time">kl. 11:00</h1>
            <h1 className="content__header">Dealing with it / Assembly 3: Normer, retningslinjer og regulering</h1>
            <h2 className="content__ingress">Sisters Gisue Hariri and Mojgan Hariri have always been "partners in crime". Charles Shafaieh meets them at their New York architecture studio.</h2>
            <h3 className="content__byline">Skrevet av <i>Tristan Boniver</i></h3>
            <h4 className="content__additional-info">1 of 7 <u>Overgrowth</u></h4>
        </article>
        </section>
    );
    return (
        <section className="main-article">
        <h1 className="content__time">kl. 11:00</h1>
        <div className="main-article__image">
        <div className="live-card">
                <div className="live-circle"></div>
                <h5>Live nå!</h5>
            </div>
        </div>
        <article className="main-article__content">
            <h1 className="content__header">Dealing with it / Assembly 3: Normer, retningslinjer og regulering</h1>
            <h2 className="content__ingress">Sisters Gisue Hariri and Mojgan Hariri have always been "partners in crime". Charles Shafaieh meets them at their New York architecture studio.</h2>
            <h3 className="content__byline">Skrevet av <i>Tristan Boniver</i></h3>
            <h4 className="content__additional-info">1 of 7 <u>Overgrowth</u></h4>
        </article>
        </section>
    )
};

export default MainArticle;