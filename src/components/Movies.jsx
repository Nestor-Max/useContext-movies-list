import React, {useState} from 'react'
import "../styles/Movies.css"

const Movies = ({ name, price, id }) => {

    return (

        <div className="movies">
          <h3>{name}</h3>
          <p>{price}</p>
          <p>{id}</p>
        </div>

    );
      

}

export default Movies