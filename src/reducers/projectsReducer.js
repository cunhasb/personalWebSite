export default (state = [], action) => {
  switch (action.type) {
    case "GET_PROJECTS": {
      return [...state, action.projects];
    }
    default:
      return state;
  }
};
