import React from "react";
import Characteristic from "./Characteristic";

const MovieCharacteristics = () => {
    const characteristics = {
        Title: "Zombie strippers !",
        Released: "19 sep 2008",
        Actors: ["Jenna Jameson", "Robert Englund", "Roxy Saint", "Penny Vital"],
        Genre: "Comedy, Horror, Sci-Fi",
        Country: "Usa"
    }

    return (
        <div>
            <Characteristic charac={characteristics}></Characteristic>
        </div >
    );
};

export default MovieCharacteristics;