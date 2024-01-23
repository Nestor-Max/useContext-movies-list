import React, { useState, useContext } from 'react'
import Movies from './Movies';
import Nav from './Nav';
import { MovieContext } from '../context/MovieListContext';

const MovieList = ( ) => {

    const {movies, setMovies} = useContext(MovieContext);

    return (
        <>
            
            {movies.map(movie => (
                <Movies name={movie.name} price={movie.price} id={movie.id} key={movie.id} />
            ))}

        </>
    );

}

export default MovieList