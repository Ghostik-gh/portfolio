function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div id={id} className="card-movie card">
      <div className="card-image-movie">
        {poster === 'N/A' ? (
          <img
            alt="None"
            className="activator"
            src={`https://via.placeholder.com/300x400?text=${title}`}
          />
        ) : (
          <img alt="None" className="activator" src={poster} />
        )}
      </div>
      <div className="card-content-movie">
        <span className="card-title">{title}</span>
        <span>
          {year} <span className="right">{type}</span>
        </span>
      </div>
    </div>
  );
}

export { Movie };
