const initialState = {
    posts: []
  };
  
  export default function (state = initialState, action) {
    if (action.type === "INITIAL_PERSONS_LOAD") {
      return {
        ...state,
        posts: [action.payload]
      };
    }
    return state;
  }
  