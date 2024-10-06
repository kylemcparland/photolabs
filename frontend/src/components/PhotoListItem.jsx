import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    id,
    user: { name: username, profile },
    urls: { full: imageSource },
    location: { city, country },
  } = props.photoData;

  const { isFavPhotoExist, mutateFavPhotos, displayModal } = props;

  return (
    <div className="photo-list__item" key={id} onClick={() => displayModal(true)}>
      <PhotoFavButton isFavPhotoExist={isFavPhotoExist} mutateFavPhotos={mutateFavPhotos} id={id} />
      <img className="photo-list__image" src={imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">{city}, {country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
