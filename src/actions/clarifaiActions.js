import Clarifai from "clarifai";
import { C_SECRET } from "../.secrets.js";
import { workFlow } from "../services/Clarifai";

export const startClient = dispatch => {
  const app = new Clarifai.App({ apiKey: C_SECRET.id });
  return { type: "SAVE_CLIENT", client: app };
};

export const analyzePicture = () => {
  return (dispatch, state) => {
    return workFlow(dispatch, state);
  };
};

export const savePictureData = data => {
  return { type: "SAVE_PICTURE_DATA", data: data };
};
