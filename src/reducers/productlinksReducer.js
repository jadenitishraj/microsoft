const initialState = {
    product_links: []
}

export default function (state = initialState, action) {

    if (action.type === "GET_productlinks") {
        return {
            ...state,
            product_links: action.payload
        };

    } else if (action.type === "ADD_productlinks") {
        return {
            ...state,
            product_links: [...state.product_links, action.payload]
        };
    } 
    else if (action.type === "DELETE_productitem") {
        console.log(...state.product_links);
        console.log(action)
        let finaldeleteditemarray = [...state.product_links]
        console.log(finaldeleteditemarray)
         finaldeleteditemarray = state.product_links.filter((item) => {
            if (item.id === action.payload) {
                console.log(action.payload)
                return false
            }
                return true
            
            })
        return {
            ...state,
            product_links: finaldeleteditemarray
            
        };
   
    }  

return state
}


