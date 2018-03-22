export default (
  state = { about: "", mouse: { coordinates: { x: 0, y: 0 } } },
  action
) => {
  switch (action.type) {
    case "GET_PARAMETERS": {
      return { ...action.parameters, mouse: { coordinates: { x: 0, y: 0 } } };
    }
    case "SET_MOUSE_COORDINATES": {
      return {
        about: state.about,
        mouse: {
          coordinates: { x: action.coordinates.x, y: action.coordinates.y }
        }
      };
    }
    default:
      return state;
  }
  return;
};
