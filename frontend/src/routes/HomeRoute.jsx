import React from "react";

import '../styles/HomeRoute.scss'
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {

  const { topics, photos, isFavPhoto, isFavPhotoExist, mutateFavPhotos, selectPhoto, favPhotoArray } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhoto={isFavPhoto} favPhotoArray={favPhotoArray} />
      <PhotoList photos={photos} isFavPhotoExist={isFavPhotoExist} mutateFavPhotos={mutateFavPhotos} selectPhoto={selectPhoto} favPhotoArray={favPhotoArray} />
    </div>
  );
};

export default HomeRoute;
