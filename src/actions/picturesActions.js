export const setRefItem = webcam => {
  return { type: "SET_REF_ITEM", refItem: webcam };
};
export const takePicture = refItem => {
  if (refItem) {
    const imageSrc = refItem.getScreenshot();
    return { type: "TAKE_PICTURE", picture: imageSrc };
  } else {
    return { type: "NULL" };
  }
};
