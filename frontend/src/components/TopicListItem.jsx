import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const { setPhotosByTopic, topicData } = props;

  const handleClick = () => {
    console.log(topicData.title);
    setPhotosByTopic(topicData.id)
  }

  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span>{topicData.title}</span>
    </div>
  );
};

export default TopicListItem;
