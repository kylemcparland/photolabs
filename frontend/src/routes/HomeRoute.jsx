import React from "react";

import '../styles/HomeRoute.scss'
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {

  const { topics, photos, isFavPhoto, isFavPhotoExist, mutateFavPhotos, displayModal } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhoto={isFavPhoto} />
      <PhotoList photos={photos} isFavPhotoExist={isFavPhotoExist} mutateFavPhotos={mutateFavPhotos} displayModal={displayModal} />
    </div>
  );
};

export default HomeRoute;
