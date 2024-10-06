import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ mutateFavPhotos, selectPhoto, favPhotoArray, photoData }) => {
  const {
    id,
    user: { name: username, profile },
    urls: { full: imageSource },
    location: { city, country },
  } = photoData;

  const isFav = favPhotoArray.includes(id);

  return (
    <div className="photo-list__item" key={id} onClick={() => selectPhoto(id)}>
      <PhotoFavButton mutateFavPhotos={mutateFavPhotos} id={id} isFav={isFav} />
      <img className="photo-list__image" src={imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <div className="photo-list__user-info">
          <p className="photo-list__username">{username}</p>
          <p className="photo-list__user-location">{city}, {country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
