import React from 'react';
import { MoviesAPI } from '../movies-api/components/MoviesAPI';
import '../movies-api/movie.css';

function MoviesPage() {
  return (
    <div className="container">
      <MoviesAPI />;
    </div>
  );
}

export { MoviesPage };
