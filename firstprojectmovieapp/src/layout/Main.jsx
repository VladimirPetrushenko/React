import React,{useEffect, useState} from 'react'
import {Movies} from '../components/Movies'
import {Preloader} from '../components/Preloader'
import {Search} from '../components/Search'
import {Pagination} from '../components/Pagination'

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () =>{
    const [movies, setMovies] = useState([]);
    const [total, setTotal] = useState(0);
    const [pages, setPages] = useState(1);
    const [name, setName] = useState('matrix');
    const [type, setType] = useState('');
    const [loading, setLoading] = useState(true);

    

    const searchMovies = (nameIn, typeIn) =>{
        setLoading(true);
        setName(()=>nameIn);
        setType(()=>typeIn); 
    }

    const changePages = (page) => {
        setLoading(true);
        setPages( () =>page );
    }

    const countPages = [];
    for (let index = 0; index < total/10; index++) {
        countPages[index] = index + 1;
    }

    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${name}${type==='' ? '' : `&type=${type}`}${pages>1 ? `&page=${pages}` : ''}`)
        .then(resp => resp.json())
        .then(data=>{
                setMovies(data.Search);
                setTotal(data.totalResults);
                setLoading(false);
            }   
        )
        .catch((error)=>{
            console.error(error);
            setLoading(false);
        });
    }, [name,type,pages]);

    return <main className="container content">
        <Search searchMovies={searchMovies}/>
        {
        !loading ? 
            <Movies movies ={movies} />  : 
            <Preloader />
        }
        <Pagination count = {countPages} nextPage = {changePages} />
    </main>
}


export {Main}