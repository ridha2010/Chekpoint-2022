// react hooks
import React, { useState } from 'react';
//Data
import { moviesData } from './Data/MoviesData';
//local components
import Navbar from './components/Navbar/Navbar';
import MovieList from './components/MovieList/MovieList';
import AddMovie from './components/AddMovie/AddMovie';

function App() {
  const [Data, setData] = useState(moviesData);

  const [name, setName] = useState('');

  const addMovieCallback = (newfilm) => {
    return setData([...Data, newfilm]);
  };

  return (
    <div className="App">
      {console.log(Data)}
      <Navbar setName={setName} />

      <AddMovie addMovieCallback={addMovieCallback} />
      <MovieList movies={Data} name={name} />
    </div>
  );
}

export default App;
