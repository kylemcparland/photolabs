import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoData, isFav, updateToFavPhotoIds }) {

  const handleFav = (e) => {
    e.stopPropagation();
    // updateToFavPhotoIds(id, isFav);
    updateToFavPhotoIds(photoData, isFav)
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleFav}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFav}></FavIcon>
      </div>
    </div>
  );
}

export default PhotoFavButton;