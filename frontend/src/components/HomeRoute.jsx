import React from "react";

import '../styles/HomeRoute.scss';
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = (props) => {

  const { topics, photos, isFavPhoto, isFavPhotoExist } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhoto={isFavPhoto} />
      <PhotoList photos={photos} isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default HomeRoute;