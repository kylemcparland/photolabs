import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favPhotoArray, setFavouritesModalSelected }) => {

  // ==> CHECK IF THERE ARE ANY FAVOURITED PHOTOS:
  const isFav = favPhotoArray.length > 0;

  return (
    <div className='fav-badge' onClick={() => setFavouritesModalSelected()}>
      <FavIcon displayAlert={isFav} selected={true}/>
      {isFav && (
        <div className='fav-badge__count'>
          <span>{favPhotoArray.length}</span>
        </div>
      )}
    </div>
  );
};

export default FavBadge;