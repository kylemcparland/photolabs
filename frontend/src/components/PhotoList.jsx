import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";

const PhotoList = () => {

  const photoListArray = photos.map(photo => (
    <PhotoListItem key={photo.id} photoData={photo} />
  ))

  return (
    <ul className="photo-list">
      {photoListArray}
    </ul>
  );
};

export default PhotoList;
