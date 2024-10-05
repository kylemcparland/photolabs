import React from 'react';

import HomeRoute from 'components/HomeRoute';
import './App.scss';
import photos from "mocks/photos";
import topics from 'mocks/topics';

const App = () => {

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos}/>
    </div>
  );
};

export default App;
