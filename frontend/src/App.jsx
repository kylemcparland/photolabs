import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

const App = () => {

  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    setPhotosByTopic,
    fetchData
  } = useApplicationData();

  return (
    <div className="App">
      {state.modal && (
        <PhotoDetailsModal
          updateToFavPhotoIds={updateToFavPhotoIds}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          photoDetails={state.modal}
          favPhotoArray={state.favPhotoArray}
          selectPhoto={setPhotoSelected}
        />
      )}
      <HomeRoute
        updateToFavPhotoIds={updateToFavPhotoIds}
        topics={state.topicData}
        photos={state.photoData}
        setPhotoSelected={setPhotoSelected}
        favPhotoArray={state.favPhotoArray}
        setPhotosByTopic={setPhotosByTopic}
        fetchData={fetchData}
      />
    </div>
  );
};

export default App;
