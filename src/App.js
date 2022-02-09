
import { useState } from 'react';
import './App.css';

import AppHeader from './components/JS/AppHeader.js';
import AppSearch from './components/JS/AppSearch';
import AnimeItem from './components/JS/AnimeItem';
import AnimePost from './components/JS/AnimePost.js';
import animes from './data/animes';



function App() {
  const [selectedAnime, setSelectedAnime] = useState(animes[null]);
  const [searchText, setSearchText] = useState('');
  function onAnimeOpenClick(theAnime) {
    setSelectedAnime(theAnime);
  }

  function onAnimeCloseClick() {
    setSelectedAnime(null);
  }

  

  const animeElements = animes.filter((anime) => {
    return anime.title.includes(searchText);
  }).map((anime, index) => {
    return <AnimeItem key={index} anime={anime} onAnimeClick={onAnimeOpenClick}/>;
  });
  


  let animePost = null;

  if (!!selectedAnime) {
    animePost = <AnimePost anime={selectedAnime} onBgClick={onAnimeCloseClick}/>
  }

  return (
    <div className="app">
        <AppHeader />
        <section className = 'app-section'>
          <div className='app-container'>
            <AppSearch value = {searchText} onValueChange = {setSearchText}/>
            <div className='app-grid'>
              {animeElements}
            </div>
          </div>
        </section>
        {animePost}
    </div>
  );
}

export default App;
