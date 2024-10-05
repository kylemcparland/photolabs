import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  return (
    <div className="topic-list__item">
      <h2>{props.topicData.title}</h2>
    </div>
  );
};

export default TopicListItem;
