import { useReducer, createContext } from 'react';
import { reducerMain } from '../reducer/reducerMain';

export const MainContext = createContext();

const initialState = {
    movies: [],
    total: 0,
    pages: 1,
    name: 'matrix',
    type: '',
    loading: true,
    search: '',
};

export const MainProvaider = ({ children }) => {
    const [value, dispatch] = useReducer(reducerMain, initialState);

    value.searchMovies = (nameIn, typeIn) => {
        dispatch({
            type: 'SEARCH_MOVIES',
            payload: { nameIn: nameIn, typeIn: typeIn },
        });
    };
    value.changePages = (page) => {
        dispatch({
            type: 'CHANGE_PAGES',
            payload: { page: page },
        });
    };
    value.loadMovies = ({ Search, totalResults }) => {
        dispatch({
            type: 'LOAD_MOVIES',
            payload: { movies: Search, total: totalResults },
        });
    };
    value.errorLoad = () => {
        dispatch({
            type: 'ERROR',
        });
    };

    value.setSearch = (event) => {
        dispatch({
            type: 'SET_SEARCH',
            payload: { search: event},
        });
    };
    value.setType = (event) => {
        dispatch({
            type: 'SET_TYPE',
            payload: { type: event},
        });
    };

    return (
        <MainContext.Provider value={value}>{children}</MainContext.Provider>
    );
};
