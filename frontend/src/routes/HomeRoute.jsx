import React from "react";

import '../styles/HomeRoute.scss'
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({ topics, photos, mutateFavPhotos, selectPhoto, favPhotoArray }) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotoArray={favPhotoArray} />
      <PhotoList photos={photos} mutateFavPhotos={mutateFavPhotos} selectPhoto={selectPhoto} favPhotoArray={favPhotoArray} />
    </div>
  );
};

export default HomeRoute;
