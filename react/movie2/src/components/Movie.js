import React from "react";

//解构
const Movie = ({ movie }) => {
    return (
        <div className="movie">
            <h2>{movie.Title}</h2>
            <div>
                <img src={movie.Poster} alt={`The movie titled:${movie.Ttile}`} width="200" />
            </div>
            <p>{movie.Year}</p>
        </div>
    )
}
export default Movie;