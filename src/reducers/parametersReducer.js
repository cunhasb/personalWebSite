export default (
  state = {
    about: "",
    home: "",
    followingPictures: {},
    mouse: { coordinates: { x: 0, y: 0 } },
    contact: "",
    clarifai: ""
  },
  action
) => {
  switch (action.type) {
    case "GET_PARAMETERS": {
      return { ...action.parameters, mouse: { coordinates: { x: 0, y: 0 } } };
    }
    case "SET_MOUSE_COORDINATES": {
      return {
        about: state.about,
        home: state.home,
        followingPictures: state.followingPictures,
        mouse: {
          coordinates: { x: action.coordinates.x, y: action.coordinates.y }
        },
        contact: state.contact,
        clarifai: state.clarifai
      };
    }
    default:
      return state;
  }
};
