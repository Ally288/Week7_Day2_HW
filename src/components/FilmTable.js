import React from "react";
import Film from './Film';

const FilmTable = ({ films }) => {
    const filmNodes = films.map((film) => {
        return(
            <li>
                <Film key={film.id} name={film.name} url={film.url} />
            </li>
        )
    })

    return (
        <div className="film-list">
            <ul>
                {filmNodes}
            </ul>
        </div>
    )};

    export default FilmTable
