import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movie = (props) => {
   const cardStyle = { // Styling added for the movie card
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


   const [movie, setMovie] = useState();

   useEffect(() => {
      const id = props.match.params.id;

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
           .then(response => {
             setMovie(response.data);
           })
           .catch(error => {
             console.error(error);
           });

      }, [props] );
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;


  return (
    <div className="save-wrapper">
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
      <div className="save-button" onClick={saveMovie}>Save</div> {/* Stretch: Adding onclick so save button functions */}
    </div>
  );
};

export default Movie;
