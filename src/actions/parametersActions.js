import parameters from "../services/parameters";
export const getParameters = () => {
  return { type: "GET_PARAMETERS", parameters: parameters };
};
