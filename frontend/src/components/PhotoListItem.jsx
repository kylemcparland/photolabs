import React, { Fragment } from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile } = props.photoData;

  return (
    <Fragment key={id}>
      <img src={imageSource} />
      <img src={profile} />
      <h2>Photographed by: {username}</h2>
      <p>Location: {location.city} {location.country}</p>
    </Fragment>
  )
};

export default PhotoListItem;
