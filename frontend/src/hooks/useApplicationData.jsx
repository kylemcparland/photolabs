import { useState } from "react";

import photos from "mocks/photos";
import topics from 'mocks/topics';

const useApplicationData = () => {

  // ==> STATE OBJECT:
  const [state, setState] = useState({
    favPhotoArray: [],
    modal: undefined
  });

  // ==> ACTION TO SET UPDATE FAVS:
  const updateToFavPhotoIds = (id, isFav) => {
    setState(prevState => {
      const updatedFavs = isFav
        ? prevState.favPhotoArray.filter(fav => fav !== id) // remove from array
        : [...prevState.favPhotoArray, id]; // add to array

      return { favPhotoArray: updatedFavs };
    });
  };

  // ==> ACTION TO SELECT PHOTO:
  const setPhotoSelected = (id) => {
    const selectedPhoto = photos.find(photo => photo.id === id);
    setState(prevState => ({ ...prevState, modal: selectedPhoto }))
  };

  // ==> ACTION TO CLOSE MODAL:
  const onClosePhotoDetailsModal = () => {
    setState(prevState => ({ ...prevState, modal: undefined }));
  };

  return {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    photos,
    topics,
  };
};

export default useApplicationData;