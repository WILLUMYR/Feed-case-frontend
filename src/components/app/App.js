import React, {useState} from 'react';
import './App.css';
import Filter from '../filter/Filter';
import Datecard from '../datecard/Datecard';
import Events from '../events/Events';
import MainArticle from '../mainArticle/MainArticle';
import Article01 from '../articles/Article01';
import Article02 from '../articles/Article02';
import ImageStack from '../image-stack/ImageStack';

function App() {
  const [date, setDate] = useState('');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 2500) setDate('Monday')
    if (window.pageYOffset < 2500) setDate('Tuesday')
  })

  return (
    <>
    <main className={date === 'Monday'? 'content-M' : 'content'}>
      <Filter />
      <Datecard  date="Tirsdag 12.oktober"/>
      <Events time="01:13:18"/>
      <MainArticle />
      <main className="articles">
      <section className="articles__top">
        <Article01 />
        <Article02 />
      </section>
      <section className="articles__bottom">
        <Article01 />
        <Article02 />
      </section>
      </main>
      <Datecard date="Mandag 11.oktober"/>
      <MainArticle />
      <ImageStack />
    <footer></footer>
    </main>
  </>
  );
}

export default App;
