export default (state = [], action) => {
  console.log("inside projects reducer", state, action);
  switch (action.type) {
    case "GET_PROJECTS": {
      return [...state, ...action.projects];
    }
    default:
      return state;
  }
};
