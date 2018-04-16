export default (
  state = {
    client: "",
    demographics: { age: [], gender: [], ethnicity: [] },
    celebrity: [],
    general: []
  },
  action
) => {
  console.log("clarifai reducer", action);
  switch (action.type) {
    case "SAVE_CLIENT": {
      return {
        client: action.client,
        demographics: state.demographics,
        celebrity: state.celebrity,
        general: state.general
      };
    }
    case "SAVE_PICTURE_DATA": {
      console.log("saving picture data", action);
      return {
        client: state.client,
        ...action.data
      };
    }
    default: {
      return state;
    }
  }
};
