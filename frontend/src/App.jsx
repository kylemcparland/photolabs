import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

const App = () => {
  const {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    photos,
    topics,
  } = useApplicationData();

  return (
    <div className="App">
      {state.modal && <PhotoDetailsModal updateToFavPhotoIds={updateToFavPhotoIds} displayModal={onClosePhotoDetailsModal} photoDetails={state.modal} favPhotoArray={state.favPhotoArray} selectPhoto={setPhotoSelected} />}
      <HomeRoute updateToFavPhotoIds={updateToFavPhotoIds} topics={topics} photos={photos} selectPhoto={setPhotoSelected} favPhotoArray={state.favPhotoArray} />
    </div>
  );
};

export default App;
