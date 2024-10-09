import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const {
    photoData,
    updateToFavPhotoIds,
    selectPhoto,
    favPhotoArray
  } = props;

  const {
    id,
    user: { name: username, profile },
    urls: { full: imageSource },
    location: { city, country },
  } = photoData;

  // ==> CHECK IF CURRENT PHOTO IS MARKED FAVOURITE:
  const isFav = favPhotoArray.includes(id);

  return (
    <div className="photo-list__item" key={id} onClick={() => selectPhoto(id)}>
      <div className="image-container">
        <PhotoFavButton
          id={id}
          isFav={isFav}
          updateToFavPhotoIds={updateToFavPhotoIds}
        />
        <img className="photo-list__image" src={imageSource} alt={`Photo by: ${username}`} />
      </div>

      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <div className="photo-list__user-info">
          <p className="photo-list__username">{username}</p>
          <p className="photo-list__user-location">{city}, {country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
