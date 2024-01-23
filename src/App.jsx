import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import Nav from './components/Nav'

import { MovieProvider } from './context/MovieListContext'
import AddMovies from './components/AddMovies'


function App() {




  return (

    <MovieProvider>
      
      <div className='App'>

        
        <Nav />
        
        <AddMovies />

        <MovieList />

      </div>
      
    </MovieProvider>      

  
      

  )
}

export default App
