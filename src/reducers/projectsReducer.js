export default (state = { projects: [], selectedProject: [] }, action) => {
  switch (action.type) {
    case "GET_PROJECTS": {
      return { projects: action.projects, selectedProject: action.projects[0] };
    }
    case "SET_SELECTED_PROJECT": {
      return { projects: state.projects, selectedProject: action.project };
    }
    default:
      return state;
  }
};
