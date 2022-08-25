import React, { useEffect, useState } from 'react';

function ManyPhotos() {
  const [countAlbums, setCountAlbums] = useState(1);
  const [photos, setPhotos] = useState([]);

  const handleClick = () => {
    getPhotos();
    setCountAlbums(countAlbums + 1);
  };

  const getPhotos = () => {
    fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${countAlbums}`)
      .then((response) => response.json())
      .then((json) => {
        setPhotos(json);
        console.log(countAlbums);
      });
  };

  useEffect(() => {}, [countAlbums]);

  return (
    <>
      <button onTouchStart={handleClick} className="more-photos">
        Add album
      </button>
      <div className="photos">
        {photos.map((photo) => (
          <div className="card-second" key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <span>{photo.title}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default ManyPhotos;
