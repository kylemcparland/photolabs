import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const photos = props.photos;

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
