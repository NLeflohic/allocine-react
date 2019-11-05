import React from "react";
import MovieCharacteristics from "./MovieCharacteristics";
import MoviePlot from "./MoviePlot";
import Poster from "./Images/zs.jpg";

const MoviePresentation = () => {
    const moviePlot = "A zombie epidemic spreads throughout a strip club in Nebraska.";
    return (
        <div>
            <div className="movie-background">
                <div className="movie">
                    <div className="movie-summary">
                        <img className="maxi-poster" src={Poster} alt="poster" />
                        <MovieCharacteristics></MovieCharacteristics>
                    </div>
                    <MoviePlot plot={moviePlot}></MoviePlot>
                </div>
            </div>

        </div>
    );
};

export default MoviePresentation;