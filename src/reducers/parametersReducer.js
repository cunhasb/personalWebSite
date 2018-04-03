export default (
  state = {
    about: "",
    followingPictures: {},
    mouse: { coordinates: { x: 0, y: 0 } },
    contact: ""
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
        followingPictures: state.followingPictures,
        mouse: {
          coordinates: { x: action.coordinates.x, y: action.coordinates.y }
        },
        contact: state.contact
      };
    }
    default:
      return state;
  }
};
