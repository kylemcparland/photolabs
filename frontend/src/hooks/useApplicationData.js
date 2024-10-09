import { useReducer, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PHOTO_DATA":
      return {
        ...state,
        photoData: action.payload.photoData
      };
    case "SET_TOPIC_DATA":
      return {
        ...state,
        topicData: action.payload.topicData
      };
    case "GET_PHOTOS_BY_TOPICS":
      return {
        ...state,
        photoData: action.payload.photoData
      }
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
    modal: undefined,
    photoData: [],
    topicData: []
  };

  // ==> USE-REDUCER:
  const [state, dispatch] = useReducer(reducer, initialState);

  // ==> INITIALIZE PHOTO DATA FROM API:
  useEffect(() => {
    fetch('/api/photos')
      .then(result => result.json())
      .then((data) => {
        dispatch({
          type: "SET_PHOTO_DATA",
          payload: { photoData: data }
        })
      })
      .catch(error => console.log("Error fetching PHOTO_DATA from API:", error))
  }, [])

  useEffect(() => {
    fetch('/api/topics')
      .then(result => result.json())
      .then((data) => {
        dispatch({
          type: "SET_TOPIC_DATA",
          payload: { topicData: data }
        })
      })
      .catch(error => console.log("Error fetching TOPIC_DATA from API:", error))
  }, [])

  useEffect(() => {
    console.log("Photo data updated");
  }, [state.photoData])

  // ==> ACTION TO SET UPDATE FAVS:
  const updateToFavPhotoIds = (id, isFav) => {
    dispatch({
      type: isFav ? "FAV_PHOTO_REMOVED" : "FAV_PHOTO_ADDED",
      payload: { id }
    });
  };

  // ==> ACTION TO SELECT PHOTO:
  const setPhotoSelected = (id) => {
    const selectedPhoto = state.photoData.find(photo => photo.id === id);
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

  const setPhotosByTopic = (topic_id) => {
    fetch(`/api/topics/photos/${topic_id}`)
      .then(result => result.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "GET_PHOTOS_BY_TOPICS",
          payload: { photoData: data }
        })
      })
  }

  return {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotosByTopic
  };
};

export default useApplicationData;