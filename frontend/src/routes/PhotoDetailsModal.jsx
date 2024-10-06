import React from 'react';

import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { displayModal, favPhotoArray, mutateFavPhotos } = props;

  const {
    id,
    user: { name: username, profile },
    urls: { full: imageSource },
    location: { city, country },
  } = props.photoDetails;

  const similarPhotos = Object.values(props.photoDetails.similar_photos);

  const isFav = favPhotoArray.find(fav => fav.id === id);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => displayModal(false)} >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img className="photo-details-modal__image" src={imageSource} />
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
        <PhotoList photos={similarPhotos} favPhotoArray={favPhotoArray} mutateFavPhotos={mutateFavPhotos} />
      </div>

    </div>
  )
};

export default PhotoDetailsModal;
