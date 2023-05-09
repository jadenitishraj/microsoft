const initialState = {
    test: ["123533"]
  };
  
  export default function (state = initialState, action) {
    if (action.type === "INITIAL_PERSONS_LOAD") {
      console.log(action);
      return {
        ...state,
        test: [action.payload]
      };
    }
    return state;
  }
  