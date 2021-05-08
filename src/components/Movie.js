import React from "react";

const Movie = ({name, image }) => {
  const image_api = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <div className="item">
        <img src={image_api + image} alt='No images available' />
        <p className="movie-name">{name}</p>
      </div>
    </div>
  );
};

export default Movie;
