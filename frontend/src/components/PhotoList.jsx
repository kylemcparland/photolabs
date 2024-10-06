import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const { photos, mutateFavPhotos, selectPhoto, favPhotoArray } = props;

  const photoListArray = photos.map(photo => (
    <PhotoListItem key={photo.id} photoData={photo} mutateFavPhotos={mutateFavPhotos} selectPhoto={selectPhoto} favPhotoArray={favPhotoArray} />
  ))

  return (
    <ul className="photo-list">
      {photoListArray}
    </ul>
  );
};

export default PhotoList;
