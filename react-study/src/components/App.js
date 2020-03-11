import React, { Fragment } from 'react';
import axios from 'axios';
import Movie from './Movie';
import 'styles/common.css';


class App extends React.Component {
    state = {
        isLoading : true,
        movies : []
    }

    getMovies = async () => {
        const {data : {data : {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sortByRating')
        this.setState({movies, isLoading : false})
    }

    async componentDidMount() {
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;

        return (
           <Fragment>
                <section className="container">
                
                {isLoading ? 
                    (<div className="loader">
                        <span className="loader__text">Loading ...</span>
                    </div>):
                    <div className="movies">
                    {movies.map(movie => <Movie
                        key={movie.id}
                        id= {movie.id} year= {movie.year} 
                        title= {movie.title} genres= {movie.genres}
                        poster={movie.large_cover_image}
                        summary = {movie.summary}
                        />)}
                    </div>
                }
                </section>
           </Fragment>
        )
    }

}

export default App;