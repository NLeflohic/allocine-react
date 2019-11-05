import React from "react";

const MoviePlot = (props) => {
    return (
        <div className="plot">
            <h1 className="plotTitle">Plot</h1>
            <p className="plotText">{props.plot}</p>
        </div>

    );
};

export default MoviePlot;