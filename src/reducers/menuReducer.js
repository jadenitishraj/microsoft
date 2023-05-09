const initialState = {
    menu: []
  };
  
  export default function (state = initialState, action) {
    if (action.type === "MENU_LOAD") {
      return {
        ...state,
        menu: action.payload
      };
    }
    return state;
  }
  