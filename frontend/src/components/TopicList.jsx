import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = (props) => {

  const { topics, setPhotosByTopic } = props;

  // ==> MAP TOPIC LIST ARRAY:
  const topicListArray = topics.map(topic => (
    <TopicListItem
      key={topic.id}
      topicData={topic}
      setPhotosByTopic={setPhotosByTopic}
    />
  ));

  return (
    <div className="top-nav-bar__topic-list">
      {topicListArray}
    </div>
  );
};

export default TopicList;
