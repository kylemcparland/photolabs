import { useReducer } from "react";
import photos from "mocks/photos";
import topics from 'mocks/topics';

const reducer = (state, action) => {
  switch (action.type) {
    case "FAV_PHOTO_ADDED":
      return {
        ...state,
        favPhotoArray: [...state.favPhotoArray, action.payload.id]
      };
    case "FAV_PHOTO_REMOVED":
      return {
        ...state,
        favPhotoArray: state.favPhotoArray.filter(fav => fav !== action.payload.id)
      };
    case "SELECT_PHOTO":
      return {
        ...state,
        modal: action.payload.selectedPhoto
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modal: undefined
      };
    default:
      return state;
  }
};

const useApplicationData = () => {

  // ==> INITIALIZE STATE OBJECT:
  const initialState = {
    favPhotoArray: [],
    modal: undefined
  };

  // ==> USE-REDUCER:
  const [state, dispatch] = useReducer(reducer, initialState);

  // ==> ACTION TO SET UPDATE FAVS:
  const updateToFavPhotoIds = (id, isFav) => {
    dispatch({
      type: isFav ? "FAV_PHOTO_REMOVED" : "FAV_PHOTO_ADDED",
      payload: { id }
    });
  };

  // ==> ACTION TO SELECT PHOTO:
  const setPhotoSelected = (id) => {
    const selectedPhoto = photos.find(photo => photo.id === id);
    dispatch({
      type: "SELECT_PHOTO",
      payload: { selectedPhoto }
    })
  };

  // ==> ACTION TO CLOSE MODAL:
  const onClosePhotoDetailsModal = () => {
    dispatch({
      type: "CLOSE_MODAL",
      payload: {}
    })
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