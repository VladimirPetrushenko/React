import React from 'react';
class Search extends React.Component {
    state = {
        searchString: '',
        type: '',
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleChangeRadioButton = (event) => {
        this.setState({type: event.target.value} , ()=>{
            this.props.searchMovies(this.state.searchString, this.state.type);
        });
            
    };

    handleKeyDown = (event) => {
        if (event.key === 'Enter')
            this.props.searchMovies(this.state.searchString, this.state.type);
    };

    render() {
        const { searchString, type } = this.state;
        return (
            <div className="input-field">
                <input
                    name="searchString"
                    placeholder="search"
                    type="search"
                    className="validate"
                    value={this.state.searchString}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
                <button
                    className="btn search-btn"
                    onClick={() => this.props.searchMovies(searchString, type)}
                >
                    Send
                </button>
                <p>
                    <label className="label">
                        <input
                            name="type"
                            type="radio"
                            value=""
                            onChange={this.handleChangeRadioButton}
                            checked={this.state.type===''}
                        />
                        <span>All</span>
                    </label>
                    <label className="label">
                        <input
                            name="type"
                            type="radio"
                            value="movie"
                            onChange={this.handleChangeRadioButton}
                            checked={this.state.type==='movie'}
                        />
                        <span>Movie</span>
                    </label>
                    <label className="label">
                        <input
                            name="type"
                            type="radio"
                            value="series"
                            onChange={this.handleChangeRadioButton}
                            checked={this.state.type==='series'}
                        />
                        <span>Series</span>
                    </label>
                </p>
            </div>
        );
    }
}

export { Search };
