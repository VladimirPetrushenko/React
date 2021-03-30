import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getById } from '../api';
import { Preloader } from '../components/Preloader';

export const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const { goBack } = useHistory();

    useEffect(() => {
        getById(id).then((data) => {
            setMovie(data);
        });
    }, [id]);
    return (
        <div>
            {!movie.imdbID ? (
                <Preloader />
            ) : (
                <div className="Movie">
                    <div className="center-align image-movie">
                        <img  src={movie.Poster} alt={movie.Title} />
                        <h1>{movie.Title}</h1>
                    </div>
                    <h5>Rated: {movie.Rated}</h5>
                    <h5>Year: {movie.Year}</h5>
                    <h5>Genre: {movie.Genre}</h5>
                    <h5>Date released: {movie.Released}</h5>
                    <h5>Writer: {movie.Writer}</h5>
                    <h5>IMDB rating: {movie.imdbRating}</h5>
                    <div className="center-align">
                    <h4>Actors</h4>
                    { movie.Actors.split(',').map(item=>{
                        return (
                            <p class="flow-text">{item}</p>
                        )
                    } ) }
                    <h4>Description</h4>
                    </div>
                    <h5>{movie.Plot}</h5>
                </div>
            )}
            <button className="btn" onClick={goBack}>
                Go Back
            </button>
        </div>
    );
};
