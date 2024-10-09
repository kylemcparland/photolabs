import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const {
    photos,
    updateToFavPhotoIds,
    selectPhoto,
    favPhotoArray
  } = props;

  // ==> MAP PHOTO LIST ARRAY:
  const photoListArray = photos.map(photo => (
    <PhotoListItem
      key={photo.id}
      photoData={photo}
      updateToFavPhotoIds={updateToFavPhotoIds}
      selectPhoto={selectPhoto}
      favPhotoArray={favPhotoArray}
    />
  ));

  return (
    <ul className="photo-list">
      {photoListArray}
    </ul>
  );
};

export default PhotoList;
