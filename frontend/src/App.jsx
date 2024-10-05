import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const App = () => {
  
  const photoListItems = [];

  for (let i = 0; i < 3; i++) {
    photoListItems.push(<PhotoListItem key={i} photoData={sampleDataForPhotoListItem} />)
  }

  return (
    <div className="App">
      {photoListItems}
    </div>
  );
};

export default App;
