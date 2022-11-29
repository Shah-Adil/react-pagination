import React, { Component } from 'react'
import Info from "./info/Info";
import { Like } from "./Like";
import { Pagination } from "./Pagination";
import { Utils } from "../utils/Utils";
import { List } from "./List";
import { getGenres } from "../fakegenra/fakeGenreService";
import "./style.css";

class Movies extends Component {
    state = {
        movies: [],
        PageSize: 4 ,
        currentPage: 1,
        genres: [],
        
    };

    componentDidMount() {
        const genres  = [{name: "All Genres" } , ...getGenres()]
        this.setState({movies: Info() , genres: getGenres() , genres})
    }

    handleDelete = (movieId) => {

        const movies = this.state.movies.filter(m => m.id !== movieId.id);
        this.setState({ movies })
    }
    handleLiked = (movie) => {
        const movies = [...this.state.movies]
        const index = movies.indexOf(movie);
        movies[index].liked = !movies[index].liked;
        this.setState({ movies })
    }

    handlePageChange = (page) => {

        this.setState({currentPage : page})
    }

    handleGenreSelect = genre => {
        this.setState({selectedGenre: genre , currentPage : 1 })
    }

    render() {
        const {length:count}= this.state.movies;
        const {PageSize , currentPage  , selectedGenre,  movies: allMovies} = this.state;

        if (count === 0) return <h1 align="center">Sorry there is no movies in the database </h1>

        const filtered = selectedGenre && selectedGenre.id ? allMovies.filter(m => m.genre.id === selectedGenre.id) : allMovies;
        const movies  = Utils(filtered , currentPage , PageSize);

        return (
            <div className='container row'>

                
                     
                    <div className='left'>
                        <List 
                        items={this.state.genres} 
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                       
                        />

                    </div>

                     <div className="right">
                       <h1 align='center'>There are  {filtered.length} Movies in the Database</h1>
                        <table cellSpacing="0">

                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Genre</td>
                                    <td>Rate</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>


                            <tbody >

                                {movies.map(movie =>
                                    <tr key={movie.id}>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre.name}</td>
                                        <td>{movie.rate}</td>
                                        <td><Like liked={movie.liked} onLiked={() => this.handleLiked(movie)} /></td>
                                        <td><button className='btn btn-primary' onClick={() => this.handleDelete(movie)}>X</button></td>

                                    </tr>
                                )}

                            </tbody>



                        </table>
                
                        <Pagination
                            itemCount={filtered.length}
                            PageSize={PageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />
                     </div>

                
            </div>
            

        );
    }
    
}

export default Movies;