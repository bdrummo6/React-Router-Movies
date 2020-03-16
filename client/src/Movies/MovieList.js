import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const MovieList = props => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    };
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
   const linkStyle = { // Styling for the Link component encompassing the movie cards
      textDecoration: 'none',
   };

   const cardStyle = { // Styling added for the movie card
      width: '70%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      color: '#ADD8E6',
      backgroundColor: '#778899',
      border: '2px solid #ADD8E6',
      borderRadius: '2%'
   };

   const titleStyle = { // Styling for the title of the movie, so it is centered on the card
      display: 'flex',
      alignSelf: 'center'
   };

   const { title, director, metascore, stars } = movie;

   return (
      <Link to={`/movies/${movie.id}`} style={linkStyle}>
         <div className="movie-card" style={cardStyle}>
            <h2 style={titleStyle}>{title}</h2>
            <div className="movie-director">
               Director: <em>{director}</em>
            </div>
            <div className="movie-metascore">
               Metascore: <strong>{metascore}</strong>
            </div>
            <h3>Actors</h3>

            {stars.map(star => (
               <div key={star} className="movie-star">
                  {star}
               </div>
            ))}
         </div>
      </Link>
  );
}

export default MovieList;
