import React, {useState, } from 'react';
import './App.css';
import Filter from '../filter/Filter';
import Datecard from '../datecard/Datecard';
import Event from '../events/Event';
import MainArticle from '../mainArticle/MainArticle';
import Article01 from '../articles/Article01';
import Article02 from '../articles/Article02';
import ImageStack from '../image-stack/ImageStack';

function App() {
  const [day, setDay] = useState('');
  const [prevDay, setPrevDay] = useState('Tirsdag');

  return (
    <>
    <main className={`content ${day}`}>
      <Filter />
      <Datecard  date="Tirsdag 12.oktober" setDay={setDay} prevDay={prevDay} setPrevDay={setPrevDay}/>
      <section className="events">
      <Event timeToEvent={'September 18, 2020 20:30:00'}/>
      <Event timeToEvent={'September 19, 2020 18:15:00'}/>
      </section>
      <MainArticle />
      <main className="articles">
        <section className="articles__left-indent">
          <Article01 />
          <Article02 />
        </section>
        <section className="articles__right-indent">
          <Article02 />
          <Article01 />
        </section>
      </main>
      <Datecard date="Mandag 11.oktober" setDay={setDay} prevDay={prevDay} setPrevDay={setPrevDay}/>
      <main className="articles">
        <section className="articles__right-indent">
          <Article01 />
          <ImageStack />
        </section>
        <section className="articles__left-indent">
          <Article01 />
          <Article02 />
        </section>
        <section className="articles__right-indent">
          <Article01 />
          <ImageStack />
        </section>
      </main>
    <footer></footer>
    </main>
  </>
  );
}

export default App;
