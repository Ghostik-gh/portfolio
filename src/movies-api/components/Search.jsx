import React, { useState } from 'react';

function Search(props) {
  const { searchMovies } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <div className="search-row">
      <div className="input-field">
        <div className="search-movie-btn">
          <input
            className="validate-search"
            placeholder="search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />
          <button
            className="btn btn-dark"
            onClick={() => searchMovies(search, type)}
          >
            Search
          </button>
        </div>
        <div className="movie-radio">
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={handleFilter}
              checked={type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={handleFilter}
              checked={type === 'movie'}
            />
            <span>Movie</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={handleFilter}
              checked={type === 'series'}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export { Search };
