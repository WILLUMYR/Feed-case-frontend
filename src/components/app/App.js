import React, {useState} from 'react';
import './App.css';
import Filter from '../filter/Filter';
import Datecard from '../datecard/Datecard';
import Event from '../events/Event';
import MainArticle from '../mainArticle/MainArticle';
import Article01 from '../articles/Article01';
import Article02 from '../articles/Article02';
import ImageStack from '../image-stack/ImageStack';
import {mainArticleData, article01Data, article02Data} from '../articles-data';

function App() {
  const [day, setDay] = useState('');
  const [prevDay, setPrevDay] = useState('Tirsdag');
  const [windowWidth, setWindowWidth] = useState();
  
  window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

  return (
    <>
    <main className={`content ${day}`}>
      <Filter windowWidth={windowWidth}/>
      <Datecard  date="Tirsdag 12.oktober" setDay={setDay} prevDay={prevDay} setPrevDay={setPrevDay}/>
      <section className="events">
      <Event timeToEvent={'September 18, 2020 20:30:30'}/>
      <Event timeToEvent={'September 19, 2020 18:15:00'}/>
      </section>
      <MainArticle windowWidth={windowWidth} mainArticleData={mainArticleData}/>
      <main className="articles">
        <section className="articles__left-indent">
          <Article01 article01Data={article01Data} />
          <Article02 article02Data={article02Data} />
        </section>
        <section className="articles__right-indent">
          <Article02 article02Data={article02Data} />
          <Article01 article01Data={article01Data} />
        </section>
      </main>
      <Datecard date="Mandag 11.oktober" setDay={setDay} prevDay={prevDay} setPrevDay={setPrevDay}/>
       {windowWidth <= 1024 ?  
      <main className="articles">
        <section className="articles__lone-article">
          <Article02 article02Data={article02Data} />
        </section>
        <ImageStack />
        <section className="articles__left-indent">
      <Article01 article01Data={article01Data} />
      <Article02 article02Data={article02Data} />
        </section>
        <section className="articles__lone-article">
          <Article02 article02Data={article02Data} />
        </section>
        <ImageStack />
      </main>
      :<main className="articles">
      <section className="articles__right-indent">
          <Article01 article01Data={article01Data} />
          <ImageStack />
        </section>
        <section className="articles__left-indent">
          <Article01 article01Data={article01Data} />
          <Article02 article02Data={article02Data} />
        </section>
        <section className="articles__right-indent">
          <Article01 article01Data={article01Data} />
          <ImageStack />
        </section>
      </main> }
    <footer></footer>
    </main>
  </>
  );
}

export default App;
