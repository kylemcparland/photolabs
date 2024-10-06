import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const { photos, isFavPhotoExist, mutateFavPhotos, selectPhoto } = props;

  const photoListArray = photos.map(photo => (
    <PhotoListItem key={photo.id} photoData={photo} isFavPhotoExist={isFavPhotoExist} mutateFavPhotos={mutateFavPhotos} selectPhoto={selectPhoto} />
  ))

  return (
    <ul className="photo-list">
      {photoListArray}
    </ul>
  );
};

export default PhotoList;
