import { useContext } from 'react';
import { MainContext } from '../context/MainContext';
const Search = (props) => {
    const {
        searchMovies = Function.prototype,
        name,
        search,
        type,
        setSearch,
        setType,
    } = useContext(MainContext);

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleChangeRadioButton = (event) => {
        search
            ? searchMovies(search, event.target.value)
            : searchMovies(name, event.target.value);
        setType(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && name !== search)
            searchMovies(search, type);
    };

    return (
        <div className="input-field">
            <input
                name="search"
                placeholder="search"
                type="search"
                className="validate"
                value={search}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <button
                className="btn search-btn"
                onClick={() => {
                    if (name !== search) searchMovies(search, type);
                }}
            >
                Send
            </button>
            <p>
                <label className="label">
                    <input
                        name="type"
                        type="radio"
                        value=""
                        onChange={handleChangeRadioButton}
                        checked={type === ''}
                    />
                    <span>All</span>
                </label>
                <label className="label">
                    <input
                        name="type"
                        type="radio"
                        value="movie"
                        onChange={handleChangeRadioButton}
                        checked={type === 'movie'}
                    />
                    <span>Movie</span>
                </label>
                <label className="label">
                    <input
                        name="type"
                        type="radio"
                        value="series"
                        onChange={handleChangeRadioButton}
                        checked={type === 'series'}
                    />
                    <span>Series</span>
                </label>
            </p>
        </div>
    );
};

export { Search };
