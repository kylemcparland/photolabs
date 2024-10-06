import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, favPhotoArray }) => {

  const isFavPhoto = favPhotoArray.length > 0;

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={isFavPhoto}/>
    </div>
  ) 
};

export default FavBadge;