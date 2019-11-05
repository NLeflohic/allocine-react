import React from "react";
import MiniPoster from "./Images/zs.jpg";

const MovieBanner = () => {
    return (
        <div className="poster-container">
            <img className="mini-poster" src={MiniPoster} alt="mini-poster" />
            <h1 className="movieName">Zombie Strippers</h1>
        </div>

    );
}

export default MovieBanner;