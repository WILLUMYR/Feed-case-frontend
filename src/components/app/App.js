import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Filter from '../filter/Filter';
import Datecard from '../datecard/Datecard';
import Events from '../events/Events';
import MainArticle from '../mainArticle/MainArticle';
import Article01 from '../articles/Article01';
import Article02 from '../articles/Article02';

function App() {
  const inputM = useRef(null);
  const inputT = useRef(null);
  const [date, setDate] = useState('');

  useEffect(() => {
    console.log(inputM.getBoundingClientRect())
  }, [date])

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) setDate('Monday')
  })

  return (
    <main className={date === 'Monday'? 'content-M' : 'content'}>
      <Filter />
      <Datecard ref={inputT} date="Tirsdag 12.oktober"/>
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
      <Datecard ref={inputM} date="Mandag 11.oktober"/>
      <MainArticle />
      <MainArticle />
    </main>
  );
}

export default App;
