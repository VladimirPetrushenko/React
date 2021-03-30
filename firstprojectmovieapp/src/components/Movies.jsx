import { Card } from './Card';
function Movies(props) {
    const { movies = [] } = props;
    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Card key={movie.imdbID} {...movie} />)
            ) : (
                <h3>Nothing founded</h3>
            )}
        </div>
    );
}

export { Movies };
