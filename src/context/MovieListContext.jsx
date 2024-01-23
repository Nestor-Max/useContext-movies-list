// import React, {useState, createContext} from 'react'

// const MovieListContext = createContext();

// const MovieProvider = props  => {

//     const [movies, setMovies] = useState([
//         {
//             name: 'Harry Porter',
//             price: '$100',
//             id: 1243
//         },
//         {
//             name: 'Game of Throne',
//             price: '$40',
//             id: 1393
//         },
//         {
//             name: 'Inception',
//             price: '$59',
//             id: 8432
//         }
//       ])

//     return(
//         <MovieListContext.Provider>
//             {props.children}
//         </MovieListContext.Provider>

//     )
// }

// export default MovieProvider;

import React, {useState, useContext, createContext} from 'react'

export const MovieContext = createContext()

export const MovieProvider= props => {

    const [movies, setMovies] = useState([

        {
            name: 'Harry Porter',
            price: '$100',
            id: 1243
        },
        {
            name: 'Game of Throne',
            price: '$40',
            id: 1393
        },
        {
            name: 'Inception',
            price: '$59',
            id: 8432
        }
    ])

    return (

        <MovieContext.Provider value={{movies, setMovies}}>
            {props.children}
        </MovieContext.Provider>
    )
}