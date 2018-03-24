export default (
  state = {
    client: "",
    demographics: { age: [], gender: [], ethnicity: [] },
    celebrity: [],
    general: []
  },
  action
) => {
  switch (action.type) {
    case "SAVE_CLIENT": {
      console.log("saving client", action);
      return {
        client: action.client,
        demographics: state.demographics,
        celebrity: state.celebrity,
        general: state.general
      };
    }
    case "SAVE_PICTURE_DATA": {
      console.log("saving picture data", action);
      // debugger;
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
