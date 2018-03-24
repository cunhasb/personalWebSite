import { combineReducers } from "redux";
import projectsReducer from "./projectsReducer";
import picturesReducer from "./picturesReducer";
import parametersReducer from "./parametersReducer";
import clarifaiReducer from "./clarifaiReducer";

export default combineReducers({
  projects: projectsReducer,
  pictures: picturesReducer,
  parameters: parametersReducer,
  clarifai: clarifaiReducer
});
