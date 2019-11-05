import React from 'react';
import Banner from './Banner';
import MovieBanner from './MovieBanner';
import MoviePresentation from "./MoviePresentation";

import "./Reset.css"
import './App.css';

function App() {
  return (
    <>
      <Banner></Banner>
      <MovieBanner></MovieBanner>
      <MoviePresentation></MoviePresentation>
    </>
  );
}

export default App;
