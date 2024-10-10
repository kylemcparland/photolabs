import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {

  const {
    topics,
    favPhotoArray,
    setPhotosByTopic,
    fetchData,
    setFavouritesModalSelected
  } = props;

  // ==> RESET TOPIC SELECTION:
  const handleClick = () => {
    fetchData('/api/photos', "SET_PHOTO_DATA");
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={handleClick}>PhotoLabs</span>
      <TopicList
        topics={topics}
        setPhotosByTopic={setPhotosByTopic}
      />
      <FavBadge
        favPhotoArray={favPhotoArray}
        setFavouritesModalSelected={setFavouritesModalSelected}
      />
    </div>
  );
};

export default TopNavigation;