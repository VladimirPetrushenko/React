import React from 'react'
import {Movies} from '../components/Movies'
import {Preloader} from '../components/Preloader'
import {Search} from '../components/Search'
import {Pagination} from '../components/Pagination'

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component{
    state = {
        movies:[],
        pages: 1,
        totalResults: 0,
        name:'matrix',
        type:'',
        loading: true,
    }
    
    componentDidMount(){
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(resp => resp.json())
            .then(data=>this.setState({movies: data.Search,totalResults: data.totalResults, loading: false}))
            .catch((error)=>{
                console.error(error);
                this.setState({loading:false});
            });
    }

    searchMovies = (name, type) =>{
        this.setState({loading:true})
        this.setState({name: name,type: type})
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${name}&type=${type}&page=${this.state.pages}`)
            .then(resp => resp.json())
            .then(data=>this.setState({movies: data.Search,totalResults: data.totalResults,loading: false}))
            .catch((error)=>{
                console.error(error);
                this.setState({loading:false});
            });
    }

    changePages = (page) => {
        this.setState({pages: page}, 
            ( () => 
                fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.name}&type=${this.state.type}&page=${this.state.pages}`)
                .then(resp => resp.json())
                .then(data=>this.setState({movies: data.Search,totalResults: data.totalResults}))
                .catch((error)=>{
                    console.error(error);
                    this.setState({loading:false});
                })
            )
        );
        
    }
    render(){
        const {movies, totalResults,loading} = this.state;
        const countPages = [];
        for (let index = 0; index < totalResults/10; index++) {
            countPages[index] = index + 1;
        }
        return <main className="container content">
            <Search searchMovies={this.searchMovies}/>
            {
            !loading ? 
            <Movies movies ={movies} />  : 
            <Preloader />
            }
            <Pagination count = {countPages} nextPage = {this.changePages} />
        </main>
    }

    
}

export {Main}