import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [favButton, changeFavState] = useState(false);

  const isFavPhotoExist = props.isFavPhotoExist;

  const handleFav = () => {
    changeFavState(prevState => !prevState);
    isFavPhotoExist(true);
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleFav}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favButton}></FavIcon>
      </div>
    </div>
  );
}

export default PhotoFavButton;