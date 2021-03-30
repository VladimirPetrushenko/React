import {useEffect, useContext} from 'react'
import {Movies} from '../components/Movies'
import {Preloader} from '../components/Preloader'
import {Search} from '../components/Search'
import {Pagination} from '../components/Pagination'
import { getBySearch } from "../api";
import { MainContext } from "../context/MainContext";

const Main = () =>{
    const {
        movies,
        total,
        pages,
        name,
        type,
        loading,
        loadMovies,
        errorLoad
    }=useContext(MainContext);

    const countPages = [];
    for (let index = 0; index < total/10; index++) {
        countPages[index] = index + 1;
    }

    useEffect(()=>{
        const str = {
            name:  name,
            type: type,
            pages: pages,
        }
        getBySearch(str).then(data=>{ loadMovies(data)}   
        )
        .catch((error)=>{
            console.error(error);
            errorLoad(false);
        });
        //eslint-disable-next-line
    }, [name,type,pages]);

    return  <main className="container content">
                <Search />
                {
                !loading ? 
                    <Movies movies ={movies} />  : 
                    <Preloader />
                }
                <Pagination count = {countPages}/>
            </main>
}


export {Main}