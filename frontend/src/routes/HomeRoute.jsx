import React from "react";

import '../styles/HomeRoute.scss'
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {

  const { topics, photos, isFavPhoto, isFavPhotoExist, mutateFavPhotos, selectPhoto } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhoto={isFavPhoto} />
      <PhotoList photos={photos} isFavPhotoExist={isFavPhotoExist} mutateFavPhotos={mutateFavPhotos} selectPhoto={selectPhoto} />
    </div>
  );
};

export default HomeRoute;
