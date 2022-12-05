import movieTrailer from 'movie-trailer';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
// import React from 'react';
import useFetch from '../hooks/useFetch';
import './Line.css';

function Line({ title, name, path }) {
  const [showTrailer, setShowTrailer] = useState(false);
  const [urlTrailer, setUrlTrailer] = useState('');
  const [elTarget, setElTarget] = useState(null);
  const { loading, fetchData } = useFetch(path);

  const handleClick = (mov, tar) => {
    if (showTrailer && tar === elTarget) {
      setUrlTrailer('');
      setShowTrailer(false);
    } else {
      setElTarget(tar);
      movieTrailer(mov?.title || mov?.name || mov?.original_name || '')
        .then((r) => {
          if (r) {
            setUrlTrailer(r);
          } else {
            setUrlTrailer('');
            setShowTrailer(false);
          }
        })
        .catch((err) => {
          setUrlTrailer('');
          setShowTrailer(false);
        });
      setUrlTrailer('');
      setShowTrailer(true);
    }
  };

  if (loading) return <p>Carregando...</p>;
  return (
    <div className='row-container'>
      <h2 className='row-header'>{title.toUpperCase()}</h2>
      <div className='row-cards'>
        {fetchData.map((movie) => (
          <img
            key={movie.id}
            className={name === 'trending' ? 'movie-card-large' : 'movie-card'}
            onClick={({ target }) => handleClick(movie, target)}
            src={`https://image.tmdb.org/t/p/original/${
              name === 'trending' ? movie.backdrop_path : movie.poster_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {showTrailer && <ReactPlayer url={urlTrailer} playing />}
    </div>
  );
}

export default Line;
