import React from "react";

import '../styles/HomeRoute.scss'
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({ topics, photos, updateToFavPhotoIds, setPhotoSelected, favPhotoArray, setPhotosByTopic }) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotoArray={favPhotoArray} setPhotosByTopic={setPhotosByTopic} />
      <PhotoList photos={photos} updateToFavPhotoIds={updateToFavPhotoIds} selectPhoto={setPhotoSelected} favPhotoArray={favPhotoArray} />
    </div>
  );
};

export default HomeRoute;
