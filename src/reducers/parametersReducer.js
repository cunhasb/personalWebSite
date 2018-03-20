export default (state = { about: "" }, action) => {
  switch (action.type) {
    case "GET_PARAMETERS": {
      return action.parameters;
    }
    default:
      return state;
  }
  return;
};
