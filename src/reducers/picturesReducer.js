export default (state = { pictures: [], refItem: null }, action) => {
  switch (action.type) {
    case "SET_REF_ITEM": {
      return { pictures: state.pictures, refItem: action.refItem };
    }
    case "GET_PICTURES": {
      return { pictures: state.pictures, refItem: state.refItem };
    }
    case "TAKE_PICTURE": {
      return {
        pictures: [...state.pictures, action.picture],
        refItem: state.refItem
      };
    }

    default:
      return state;
  }
};
