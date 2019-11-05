import React from "react";

const Characteristic = (props) => {
    console.log(props);
    const tabActors = props.charac.Actors;
    const actors = tabActors.join(", ");
    return (
        <div className="characteristic">
            <div className="characType">
                <h3>Title:</h3><span>{props.charac.Title}</span>
            </div>
            <div className="characType">
                <h3>Released:</h3> <span>{props.charac.Released}</span>
            </div>
            <div className="characType">
                <h3>Actors :</h3><span> {actors}</span>
            </div>
            <div className="characType">
                <h3>Genre:</h3> <span>{props.charac.Genre}</span>
            </div>
            <div className="characType">
                <h3>Country:</h3><span>{props.charac.Country}</span>
            </div>
        </div>
    );
};

export default Characteristic;