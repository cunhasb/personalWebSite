export default (
  state = {
    projects: [],
    selectedProject: [],
    siblings: [],
    mouse: { pointer: 0, type: "default" }
  },
  action
) => {
  switch (action.type) {
    case "GET_PROJECTS": {
      return {
        projects: action.projects,
        selectedProject: action.projects[0],
        siblings: [
          action.projects[action.projects.length - 1],
          action.projects[action.projects.length - 1 > 1 ? 1 : 0]
        ],
        mouse: {
          pointer: state.mouse.pointer,
          type: state.mouse.type
        }
      };
    }
    case "SET_SELECTED_PROJECT": {
      let index = state.projects.findIndex(
        project => project.id === action.project.id
      );

      return {
        projects: state.projects,
        selectedProject: action.project,
        siblings: [
          state.projects[index > 0 ? index - 1 : state.projects.length - 1],
          state.projects[state.projects.length - 1 > index ? index + 1 : 0]
        ],
        mouse: {
          pointer: state.mouse.pointer,
          type: state.mouse.type
        }
      };
    }
    case "SET_MOUSE_POINTER": {
      return {
        projects: state.projects,
        selectedProject: state.selectedProject,
        siblings: state.siblings,
        mouse: {
          pointer: action.pointer,
          type: state.mouse.type
        }
      };
    }
    case "SET_POINTER_TYPE": {
      return {
        projects: state.projects,
        selectedProject: state.selectedProject,
        siblings: state.siblings,
        mouse: {
          pointer: state.mouse.pointer,
          type: action.pointer
        }
      };
    }
    default:
      return state;
  }
};
