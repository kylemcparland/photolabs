import React, { useState } from 'react';

import HomeRoute from 'components/HomeRoute';
import './App.scss';
import photos from "mocks/photos";
import topics from 'mocks/topics';

const App = () => {

  const [isFavPhoto, isFavPhotoExist] = useState(false);
  const [favPhotoArray, modifyFavPhotoArray ] = useState([]);

  const mutateFavPhotos = (id, state) => {
    state 
      ? modifyFavPhotoArray(currentFavs => currentFavs.filter(fav => Number(fav.id) !== Number(id) + 1))
      : modifyFavPhotoArray(currentFavs => [...currentFavs, photos[id]])
  }

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} isFavPhotoExist={isFavPhotoExist} isFavPhoto={isFavPhoto} mutateFavPhotos={mutateFavPhotos} />
    </div>
  );
};

export default App;
