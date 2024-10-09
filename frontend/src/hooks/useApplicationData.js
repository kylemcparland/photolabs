import { useReducer, useEffect } from "react";
import ACTIONS from "actions/actions";

const {
  SET_PHOTO_DATA,
  SET_TOPIC_DATA,
  GET_PHOTOS_BY_TOPICS,
  FAV_PHOTO_ADDED,
  FAV_PHOTO_REMOVED,
  SELECT_PHOTO,
  CLOSE_MODAL
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
        favPhotoArray: [...state.favPhotoArray, action.payload.id]
      };
    case FAV_PHOTO_REMOVED:
      return {
        ...state,
        favPhotoArray: state.favPhotoArray.filter(fav => fav !== action.payload.id)
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
  const updateToFavPhotoIds = (id, isFav) => {
    dispatch({
      type: isFav ? FAV_PHOTO_REMOVED : FAV_PHOTO_ADDED,
      payload: { id }
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

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    setPhotosByTopic,
    fetchData
  };
};

export default useApplicationData;