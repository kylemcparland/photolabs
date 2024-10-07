import React, { Fragment } from 'react';

import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onClosePhotoDetailsModal, favPhotoArray, updateToFavPhotoIds, photoDetails, selectPhoto }) => {

  const {
    id,
    user: { name: username, profile },
    urls: { full: imageSource },
    location: { city, country },
    similar_photos
  } = photoDetails;

  const similarPhotos = Object.values(similar_photos);
  const isFav = favPhotoArray.includes(id);

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">

        <button className="photo-details-modal__close-button" onClick={onClosePhotoDetailsModal} >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>

      <div className="photo-area">
        <div className="photo-details-modal__image-container">
          <PhotoFavButton isFav={isFav} updateToFavPhotoIds={updateToFavPhotoIds} id={id} />
          <img className="photo-details-modal__image" src={imageSource} />
        </div>
      </div>

      <div className="photo-details-modal__header">
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={profile} />
          <div className="photo-details-modal__photographer-info">
            <p>{username}</p>
            <p className="photo-details-modal__photographer-location">{city} {country}</p>
          </div>
        </div>
      </div>

      <div className="photo-details-modal__images">
        <p>Similar Photos</p>
        <PhotoList photos={similarPhotos} favPhotoArray={favPhotoArray} updateToFavPhotoIds={updateToFavPhotoIds} selectPhoto={selectPhoto} />
      </div>

    </div>
  )
};

export default PhotoDetailsModal;
