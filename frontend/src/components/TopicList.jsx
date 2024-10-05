import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {

  const topics = props.topics;

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
