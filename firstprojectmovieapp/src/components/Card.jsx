import { Link } from "react-router-dom";

function Card(props) {
    const { Title, Year, Type, imdbID, Poster } = props;
    return (
        <div id={imdbID} className="card">
            <div className="card-image waves-effect waves-block waves-light">
            <Link to={`/movie/${imdbID}`}>{Poster === 'N/A' ? (
                    <img
                        className="activator"
                        src="https://via.placeholder.com/300x450.png?text=Is not found"
                        alt=""
                    />
                ) : (
                    <img className="activator" src={Poster} alt="" />
                )}</Link>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {Title}
                </span>
                <p>
                    {Year} <span className="right">{Type}</span>
                </p>
            </div>
        </div>
    );
}

export { Card };
