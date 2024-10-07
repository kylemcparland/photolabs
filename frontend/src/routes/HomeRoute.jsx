import React from "react";

import '../styles/HomeRoute.scss'
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({ topics, photos, updateToFavPhotoIds, setPhotoSelected, favPhotoArray }) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotoArray={favPhotoArray} />
      <PhotoList photos={photos} updateToFavPhotoIds={updateToFavPhotoIds} selectPhoto={setPhotoSelected} favPhotoArray={favPhotoArray} />
    </div>
  );
};

export default HomeRoute;
