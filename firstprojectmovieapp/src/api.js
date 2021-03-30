const API_KEY = process.env.REACT_APP_API_KEY

export const getBySearch = async (str) => {
    const {name, type, pages} = str;
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${name}${type==='' ? '' : `&type=${type}`}${pages>1 ? `&page=${pages}` : ''}`);
    return await response.json();
}

export const getById= async (id) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
    return await response.json();
}