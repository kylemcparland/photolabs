import React, { useState } from 'react';

import HomeRoute from 'components/HomeRoute';
import './App.scss';
import photos from "mocks/photos";
import topics from 'mocks/topics';

const App = () => {

  const [isFavPhoto, isFavPhotoExist] = useState(false);

  const [favPhotos, addPhotoToFav ] = useState([]);

  const addFavPhoto = (id) => {
    addPhotoToFav(currentFavs => [...currentFavs, photos[id]]);
  }

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} isFavPhotoExist={isFavPhotoExist} isFavPhoto={isFavPhoto} addFavPhoto={addFavPhoto} />
    </div>
  );
};

export default App;
