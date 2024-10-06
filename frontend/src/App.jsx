import React, { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

import photos from "mocks/photos";
import topics from 'mocks/topics';

const App = () => {

  const [isFavPhoto, isFavPhotoExist] = useState(false);
  const [favPhotoArray, modifyFavPhotoArray] = useState([]);
  const [modal, displayModal] = useState(false);

  const mutateFavPhotos = (id, state) => {
    const newFavourite = photos.find(photo => photo.id === id);
    state
      ? modifyFavPhotoArray(currentFavs => currentFavs.filter(fav => fav.id !== id))
      : modifyFavPhotoArray(currentFavs => [...currentFavs, newFavourite])
  }

  return (
    <div className="App">
      {modal && <PhotoDetailsModal displayModal={displayModal} />}
      <HomeRoute topics={topics} photos={photos} isFavPhotoExist={isFavPhotoExist} isFavPhoto={isFavPhoto} mutateFavPhotos={mutateFavPhotos} displayModal={displayModal} />
    </div>
  );
};

export default App;
