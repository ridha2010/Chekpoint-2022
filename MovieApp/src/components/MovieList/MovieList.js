import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, name }) => {
  return (
    <div className="movies">
      {movies
        .filter((movie) => movie.Title.toLowerCase().includes(name.toLowerCase().trim()))
        .map((movie, index) => {
          return (
            <div key={index}>
              <MovieCard movie={movie} />
            </div>
          );
        })}
    </div>
  );
};

export default MovieList;
