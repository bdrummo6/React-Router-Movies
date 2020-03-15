import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
     { /*Stretch: I turned the saved movies into links, which link to their movie cards */ }
    {props.list.map(movie => (
       <Link to={`/movies/${movie.id}`}>
          <span className="saved-movie">{movie.title}</span>
       </Link>
    ))}
    <Link to='/'>
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
