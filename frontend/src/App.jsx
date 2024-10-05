import React from 'react';

import TopicList from 'components/TopicList';
import PhotoList from 'components/PhotoList';
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;
