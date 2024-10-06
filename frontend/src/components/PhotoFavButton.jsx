import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {


  const { mutateFavPhotos, id, isFav } = props;

  const handleFav = (e) => {
    e.stopPropagation();

    // isFavPhotoExist(true);
    mutateFavPhotos(id, isFav);
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