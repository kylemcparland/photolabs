import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    id,
    user: { name: username, profile },
    urls: { full: imageSource },
    location: { city, country },
  } = props.photoData;

  const { isFavPhotoExist, mutateFavPhotos, selectPhoto, favPhotoArray } = props;

  const isFav = favPhotoArray.find(fav => fav.id === id);

  return (
    <div className="photo-list__item" key={id} onClick={() => selectPhoto(id)}>
      <PhotoFavButton isFavPhotoExist={isFavPhotoExist} mutateFavPhotos={mutateFavPhotos} id={id} isFav={isFav} />
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
