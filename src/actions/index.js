import projects from "../services/projects";
export const getProjects = () => {
  return { type: "GET_PROJECTS", projects: projects };
};
export const setSelectedProject = project => {
  console.log("setSelectedProject action", project);
  return { type: "SET_SELECTED_PROJECT", project: project };
};
