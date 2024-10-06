import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const photos = props.photos;
  const isFavPhotoExist = props.isFavPhotoExist;
  const addFavPhoto = props.addFavPhoto;

  const photoListArray = photos.map(photo => (
    <PhotoListItem key={photo.id} photoData={photo} isFavPhotoExist={isFavPhotoExist} addFavPhoto={addFavPhoto} />
  ))

  return (
    <ul className="photo-list">
      {photoListArray}
    </ul>
  );
};

export default PhotoList;
