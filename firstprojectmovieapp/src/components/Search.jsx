import React, { useState } from 'react';

const Search = (props) => {
    const { searchMovies = Function.prototype } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleChangeRadioButton = (event) => {
        setType((prevType) => {
            searchMovies(search, event.target.value);
            return event.target.value;
        });
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') searchMovies(search, type);
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
                onClick={() => searchMovies(search, type)}
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
