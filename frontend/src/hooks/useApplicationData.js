import { useReducer, useEffect } from "react";
import ACTIONS from "actions/actions";

const {
  SET_PHOTO_DATA,
  SET_TOPIC_DATA,
  GET_PHOTOS_BY_TOPICS,
  FAV_PHOTO_ADDED,
  FAV_PHOTO_REMOVED,
  SELECT_PHOTO,
  CLOSE_MODAL,
  OPEN_FAVOURITES_MODAL
} = ACTIONS;

// ==> REDUCER:
const reducer = (state, action) => {
  switch (action.type) {
    case SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload.data
      };
    case SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload.data
      };
    case GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoData: action.payload.data
      }
    case FAV_PHOTO_ADDED:
      return {
        ...state,
        favPhotoArray: [...state.favPhotoArray, action.payload.photoData]
      };
    case FAV_PHOTO_REMOVED:
      return {
        ...state,
        favPhotoArray: state.favPhotoArray.filter(fav => fav.id !== action.payload.photoData.id)
      };
    case SELECT_PHOTO:
      return {
        ...state,
        modal: action.payload.selectedPhoto
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: undefined
      };
    case OPEN_FAVOURITES_MODAL:
      return {
        ...state,
        modal: "FAVOURITES_MODAL"
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {

  // ==> INITIALIZE STATE OBJECT:
  const initialState = {
    favPhotoArray: [],
    modal: undefined,
    photoData: [],
    topicData: []
  };

  // ==> USE-REDUCER:
  const [state, dispatch] = useReducer(reducer, initialState);

  // ==> FETCH DATA FROM API:
  const fetchData = (url, actionType) => {
    fetch(url)
      .then(result => result.json())
      .then(data => dispatch({ type: actionType, payload: { data } }))
      .catch(error => console.log(`Error fetching data from ${url}`, error));
  };

  // ==> INITIALIZE PHOTO/TOPICS DATA:
  useEffect(() => {
    fetchData('/api/photos', SET_PHOTO_DATA);
    fetchData('/api/topics', SET_TOPIC_DATA);
  }, []);

  // ==> ACTION TO SET UPDATE FAVS:
  const updateToFavPhotoIds = (photoData, isFav) => {
    dispatch({
      type: isFav ? FAV_PHOTO_REMOVED : FAV_PHOTO_ADDED,
      payload: { photoData }
    });
  };

  // ==> ACTION TO SELECT PHOTO:
  const setPhotoSelected = (id) => {
    window.scrollTo(0, 0);
    const selectedPhoto = state.photoData.find(photo => photo.id === id);
    dispatch({ type: SELECT_PHOTO, payload: { selectedPhoto } });
  };

  // ==> ACTION TO CLOSE MODAL:
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  // ==> MODAL SCROLL UP WHEN PHOTO SELECTED:
  useEffect(() => {
    const modal = document.getElementById('photo-details-modal');
    if (modal) {
      modal.scrollTo(0, 0);
    }
  }, [state.modal]);

  // ==> ACTION TO SET SPECIFIC TOPIC:
  const setPhotosByTopic = (topic_id) => {
    fetchData(`/api/topics/photos/${topic_id}`, GET_PHOTOS_BY_TOPICS);
  };

  // ==> ACTION TO OPEN FAVOURITES MODAL:
  const setFavouritesModalSelected = () => {
    dispatch({ type: OPEN_FAVOURITES_MODAL });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    setPhotosByTopic,
    fetchData,
    setFavouritesModalSelected
  };
};

export default useApplicationData;