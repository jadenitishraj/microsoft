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
        console.log(...state.product_links);
        return {
            ...state,
            product_links: [...state.product_links, action.payload]
        };
    } 
    else if (action.type === "DELETE_productitem") {
        console.log(...state.product_links);
        console.log(action.payload)
        const finaldeleteditemarray = [...state.product_links]
         finaldeleteditemarray = state.product_links.filter((item) => {
            if (item.id === action.payload) {
                return false
            }else{
                return true
            }
        })
        return {
            ...state,
            product_links: finaldeleteditemarray
        }
    }  


}


