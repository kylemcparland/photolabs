import React from "react";

import '../styles/HomeRoute.scss';
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = (props) => {

  const { topics, photos, isFavPhoto, isFavPhotoExist, mutateFavPhotos } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhoto={isFavPhoto} />
      <PhotoList photos={photos} isFavPhotoExist={isFavPhotoExist} mutateFavPhotos={mutateFavPhotos} />
    </div>
  );
};

export default HomeRoute;