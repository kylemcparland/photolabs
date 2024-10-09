import React from 'react';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {

  const {
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    photoDetails,
    favPhotoArray,
    selectPhoto
  } = props;

  const {
    id,
    user: { name: username, profile },
    urls: { full: imageSource },
    location: { city, country },
    similar_photos
  } = photoDetails;

  // ==> EXTRACT ARRAY OF SIMILAR PHOTOS:
  const similarPhotos = Object.values(similar_photos);

  // ==> CHECK IF CURRENT PHOTO IS MARKED FAVOURITE:
  const isFav = favPhotoArray.includes(id);

  return (
    <div className="photo-details-modal" id="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={onClosePhotoDetailsModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>

      <div className="photo-area">
        <div className="photo-details-modal__image-container">
          <PhotoFavButton
            id={id}
            isFav={isFav}
            updateToFavPhotoIds={updateToFavPhotoIds}
          />
          <img className="photo-details-modal__image" src={imageSource} alt={`Photo by: ${username}`} />
        </div>
      </div>

      <div className="photo-details-modal__header">
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={profile} alt={`${username}'s profile photo`} />
          <div className="photo-details-modal__photographer-info">
            <p className="photo-details-modal__photographer-name">{username}</p>
            <p className="photo-details-modal__photographer-location">{city} {country}</p>
          </div>
        </div>
      </div>

      <div className="photo-details-modal__images">
        <p className="photo-details-modal__similar-photos">Similar Photos</p>
        <PhotoList
          photos={similarPhotos}
          favPhotoArray={favPhotoArray}
          updateToFavPhotoIds={updateToFavPhotoIds}
          selectPhoto={selectPhoto}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
