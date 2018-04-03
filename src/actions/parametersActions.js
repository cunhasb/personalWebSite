import parameters from "../services/parameters";
export const getParameters = () => {
  let para = parameters;
  return { type: "GET_PARAMETERS", parameters: parameters };
};
export const setMouseCoordinates = coordinates => {
  return { type: "SET_MOUSE_COORDINATES", coordinates: coordinates };
};
