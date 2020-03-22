import React from 'react';
import PropTypes from 'prop-types';

function Movie({id, year, title, genres, poster, summary}) {
    return(
        
        <div className="movie">
            <div className="movie__poster"><img src={poster} alt={title}/></div>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{title}</h5>
                <p classNmae="movie__summary">{summary}</p>
                <ul className="movie__genres">
                    {genres.map((genre, idx) => (
                        <li className="genre__genre">
                            {idx + 1} : {genre}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    poster : PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
}

export default Movie;