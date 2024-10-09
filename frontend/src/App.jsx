import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

const App = () => {

  const {
    state: { modal, favPhotoArray, topicData, photoData },
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    setPhotosByTopic,
    fetchData
  } = useApplicationData();

  return (
    <div className="App">
      {modal && (
        <PhotoDetailsModal
          updateToFavPhotoIds={updateToFavPhotoIds}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          photoDetails={modal}
          favPhotoArray={favPhotoArray}
          selectPhoto={setPhotoSelected}
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
      />
    </div>
  );
};

export default App;
