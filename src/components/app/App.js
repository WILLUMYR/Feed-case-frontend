import React from 'react';
import './App.css';
import Filter from '../filter/Filter';
import Datecard from '../datecard/Datecard';
import Events from '../events/Events';
import MainArticle from '../mainArticle/MainArticle';

function App() {
  return (
    <main className="content">
      <Filter />
      <Datecard date="Tirsdag 12.oktober"/>
      <Events time="01:13:18"/>
      <MainArticle />
    </main>
  );
}

export default App;
