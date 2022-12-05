import React from 'react';
import useFetch from '../hooks/useFetch';
import { categories } from '../services/apiTMDB';
import './Banner.css';

const MAX_WORD = 25;

function Banner() {
  const { loading, fetchData } = useFetch(
    categories.find((el) => el.name === 'netflixOriginals').path
  );

  const cropText = (str) =>
    str
      .split(' ')
      .filter((_, i) => i < MAX_WORD)
      .join(' ') + '...';

  if (loading) return <p>Carregando...</p>;
  const index = Math.floor(Math.random() * fetchData.length);
  return (
    <header
      className='banner-container'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${fetchData[index]?.backdrop_path})`,
        roundPosition: 'center-center',
      }}
    >
      <div className='banner-content'>
        <h1 className='banner-title'>
          {fetchData[index]?.title ||
            fetchData[index]?.name ||
            fetchData[index]?.original_name}
        </h1>
        <div className='banner-button-container'>
          <button className='banner-button'>Play</button>
          <button className='banner-button'>My List</button>
        </div>
        <div className='banner-description'>
          <h2>{cropText(fetchData[index]?.overview)}</h2>
        </div>
      </div>
    </header>
  );
}

export default Banner;
