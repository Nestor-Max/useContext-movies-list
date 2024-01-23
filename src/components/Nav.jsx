import React, {useState, useContext} from 'react'
import "../styles/Nav.css"
import { MovieContext } from '../context/MovieListContext';

const Nav = () => {

    const {movies, setMovies} = useContext(MovieContext);

    return (

        <nav className='navbar'>
            <h3>Pramount+</h3>
            <p>List of Movies: {movies.length} </p>
        </nav>


    )

}

export default Nav