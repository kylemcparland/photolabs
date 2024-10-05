import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
import topics from "mocks/topics";

const TopicList = () => {

  const topicListArray = topics.map(topic => (
    <TopicListItem key={topic.id} topicData={topic}/>
  ))

  return (
    <div className="top-nav-bar__topic-list">
      {topicListArray}
    </div>
  );
};

export default TopicList;
