import projects from "../services/projects";
export const getProjects = () => {
  return { type: "GET_PROJECTS", projects: projects };
};
export const setSelectedProject = project => {
  return { type: "SET_SELECTED_PROJECT", project: project };
};
export const getSiblings = project => {
  return { type: "GET_SIBLINGS_PROJECTS", project: project };
};
export const setMousePointer = pointer => {
  return { type: "SET_MOUSE_POINTER", pointer: pointer };
};
export const setPointerType = type => {
  return { type: "SET_POINTER_TYPE", pointer: type };
};
