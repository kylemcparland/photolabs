import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {

  const { topics, favPhotoArray, setPhotosByTopic } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => location.reload()}>PhotoLabs</span>
      <TopicList topics={topics} setPhotosByTopic={setPhotosByTopic} />
      <FavBadge favPhotoArray={favPhotoArray} />
    </div>
  )
}

export default TopNavigation;