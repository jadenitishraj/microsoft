const initialState = {
    product_links: []
}

export default function (state = initialState, action) {

    if (action.type === "GET_productlinks") {

       return {
        ...state,
        product_links:[action.payload]
       };

    }
    return state;
}


  
  