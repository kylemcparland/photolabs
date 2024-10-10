import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import FavouritePhotosModal from 'routes/FavouritePhotosModal';

import './App.scss';

const App = () => {

  const {
    state: { modal, favPhotoArray, topicData, photoData },
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    setPhotosByTopic,
    fetchData,
    setFavouritesModalSelected
  } = useApplicationData();

  // ==> CHECK WHAT IS STORED IN MODAL:
  const modalType = typeof modal;

  return (
    <div className="App">
      {modalType === "object" && (
        <PhotoDetailsModal
          updateToFavPhotoIds={updateToFavPhotoIds}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          photoDetails={modal}
          favPhotoArray={favPhotoArray}
          selectPhoto={setPhotoSelected}
        />
      )}
      {modalType === "string" && (
        <FavouritePhotosModal
        photos={favPhotoArray}
        updateToFavPhotoIds={updateToFavPhotoIds}
        selectPhoto={setPhotoSelected}
        favPhotoArray={favPhotoArray}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        />
      )}
      <HomeRoute
        topics={topicData}
        photos={photoData}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
        favPhotoArray={favPhotoArray}
        setPhotosByTopic={setPhotosByTopic}
        fetchData={fetchData}
        setFavouritesModalSelected={setFavouritesModalSelected}
      />
    </div>
  );
};

export default App;
