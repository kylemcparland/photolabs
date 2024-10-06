import React, { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

import photos from "mocks/photos";
import topics from 'mocks/topics';

const App = () => {
  const [favPhotoArray, modifyFavPhotoArray] = useState([]);
  const [modal, displayModal] = useState();

  const selectPhoto = (id) => {
    const selectedPhoto = photos.find(photo => photo.id === id);
    displayModal(selectedPhoto);
  }

  const mutateFavPhotos = (id, state) => {
    state
      ? modifyFavPhotoArray(currentFavs => currentFavs.filter(fav => fav !== id))
      : modifyFavPhotoArray(currentFavs => [...currentFavs, id])
  }

  return (
    <div className="App">
      {modal && <PhotoDetailsModal displayModal={displayModal} photoDetails={modal} favPhotoArray={favPhotoArray} mutateFavPhotos={mutateFavPhotos} />}
      <HomeRoute topics={topics} photos={photos} mutateFavPhotos={mutateFavPhotos} selectPhoto={selectPhoto} favPhotoArray={favPhotoArray} />
    </div>
  );
};

export default App;
