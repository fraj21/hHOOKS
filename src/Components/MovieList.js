import React from 'react';
import MovieCard from './MovieCard';

function MovieList({movie,inputSearch,rating}) {
  return <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
    { movie?.filter((movie)=>movie.title.toUpperCase().includes(inputSearch.toUpperCase())
    && movie.rate  === rating ) 
    .map((movie)=><MovieCard mov={movie}   />   )
    }
  </div>;
}

export default MovieList;