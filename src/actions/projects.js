import projects from "../services/projects";
export const getProjects = () => {
  return { type: "GET_PROJECTS", projects: projects };
};
