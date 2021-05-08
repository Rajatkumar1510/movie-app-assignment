import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
const Movies = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          name={movie.original_title}
          image={movie.poster_path}
          altImage={movie.backdrop_path}
        />
      ))}
    </div>
  );
};

export default Movies;
