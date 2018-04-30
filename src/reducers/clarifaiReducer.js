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
      return {
        client: action.client,
        demographics: state.demographics,
        celebrity: state.celebrity,
        general: state.general
      };
    }
    case "SAVE_PICTURE_DATA": {
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
