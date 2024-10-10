import React from 'react';
import PhotoList from 'components/PhotoList';

import '../styles/FavouritePhotosModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const FavouritePhotosModal = (props) => {

  const {
    photos,
    updateToFavPhotoIds,
    selectPhoto,
    favPhotoArray,
    onClosePhotoDetailsModal
  } = props;

  return (
    <div className="favourite-photos-modal">
      <div className="favourite-photos-modal__top-bar">
        <button className="favourite-photos-modal__close-button" onClick={onClosePhotoDetailsModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className="favourite-photos-modal__title">
        <h2>Your Favourite Photos:</h2>
      </div>

      <div className="favourite-photos__images">
        {favPhotoArray.length === 0 && <p className="favourite-photos-no-likes">Nothing yet 💔</p>}
        <PhotoList
          photos={photos}
          updateToFavPhotoIds={updateToFavPhotoIds}
          selectPhoto={selectPhoto}
          favPhotoArray={favPhotoArray}
        />
      </div>
    </div>
  )
}

export default FavouritePhotosModal;