import React from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const {
    topics,
    photos,
    updateToFavPhotoIds,
    setPhotoSelected,
    favPhotoArray,
    setPhotosByTopic,
    fetchData,
    setFavouritesModalSelected
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favPhotoArray={favPhotoArray}
        setPhotosByTopic={setPhotosByTopic}
        fetchData={fetchData}
        setFavouritesModalSelected={setFavouritesModalSelected}
      />
      <PhotoList
        photos={photos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        selectPhoto={setPhotoSelected}
        favPhotoArray={favPhotoArray}
      />
    </div>
  );
};

export default HomeRoute;
