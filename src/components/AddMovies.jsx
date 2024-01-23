
import React, {useState, useContext} from 'react'
import '../styles/AddMovies.css'
import { MovieContext } from '../context/MovieListContext';
import { useForm } from 'react-hook-form'

const AddMovies = () => {

    const [name, setName] = useState('')

    const [price, setPrice] = useState('')

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }
    

    const {movies, setMovies} = useContext(MovieContext);

    const handleSubmit = e => {
        e.preventDefault();
        // add some code to send the name and price to some API or function
        setMovies(prevMovies => [...prevMovies, { name:name, price:price}])

        e.target.reset();
    }

    

    return(
        <form onSubmit={handleSubmit} className='movie-form'>
            <input type="text" name='name' value={name} onChange={updateName} required/>
            <input type="text" name='price' value={price} onChange={updatePrice} required/>
            <button>Submit</button>
        </form>
    )
}

export default AddMovies;

