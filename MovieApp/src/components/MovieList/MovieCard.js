import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
};

export default MovieCard;
