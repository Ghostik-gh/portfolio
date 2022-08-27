import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ManyPhotos() {
  const [countPage, setCountPage] = useState(1);
  const [totalPhotos, setTotalPhotos] = useState(50);
  const [photos, setPhotos] = useState([]);
  const [fetching, setFetching] = useState(true);

  const scrollHandle = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        window.innerHeight -
        e.target.documentElement.scrollTop <
        400 &&
      photos.length < totalPhotos
    ) {
      setFetching(true);
    }
  };

  const getPhotos = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${countPage}`
      )
      .then((response) => {
        setTotalPhotos(response.headers['x-total-count']);
        setPhotos([...photos, ...response.data]);
      })
      .finally(setFetching(false));
  };

  useEffect(() => {
    if (fetching) {
      getPhotos();
      setCountPage((prevPage) => prevPage + 1);
    }

    // eslint-disable-next-line
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandle);
    return function () {
      document.removeEventListener('scroll', scrollHandle);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="photos">
        {photos.map((photo, key) => (
          <div className="card-second" key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <span>
              {photo.id}. {photo.title}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default ManyPhotos;
