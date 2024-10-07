import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ updateToFavPhotoIds, id, isFav }) {

  const handleFav = (e) => {
    e.stopPropagation();
    updateToFavPhotoIds(id, isFav);
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