import React, { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

import photos from "mocks/photos";
import topics from 'mocks/topics';

const App = () => {
  // cut?
  const [isFavPhoto, isFavPhotoExist] = useState(false);
  //
  const [favPhotoArray, modifyFavPhotoArray] = useState([]);
  const [modal, displayModal] = useState();

  const selectPhoto = (id) => {
    const selectedPhoto = photos.find(photo => photo.id === id);
    displayModal(selectedPhoto);
  }

  const mutateFavPhotos = (id, state) => {
    const newFavourite = photos.find(photo => photo.id === id);
    state
      ? modifyFavPhotoArray(currentFavs => currentFavs.filter(fav => fav.id !== id))
      : modifyFavPhotoArray(currentFavs => [...currentFavs, newFavourite])
  }

  return (
    <div className="App">
      {modal && <PhotoDetailsModal displayModal={displayModal} photoDetails={modal} favPhotoArray={favPhotoArray} mutateFavPhotos={mutateFavPhotos} />}
      <HomeRoute topics={topics} photos={photos} isFavPhotoExist={isFavPhotoExist} isFavPhoto={isFavPhoto} mutateFavPhotos={mutateFavPhotos} selectPhoto={selectPhoto} favPhotoArray={favPhotoArray} />
    </div>
  );
};

export default App;
