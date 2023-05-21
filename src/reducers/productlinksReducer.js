const initialState = {
    product_links: [],
    product_img: []
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
            product_links: [...state.product_links, action.payload],
            product_img: [...state.product_img, action.payload]
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

    } else if (action.type === "UPDATE_productitem") {
        console.log(...state.product_links);
        console.log(action)
        let updateditemarray = [...state.product_links]
        // console.log(finaldeleteditemarray)
        updateditemarray = state.product_links.map((item) => {
            if (action.payload.id === item.id) {
                console.log(action.payload)
                console.log(updateditemarray);
                return action.payload
            }
            return item

        })
        return {
            ...state,
            product_links: updateditemarray

        };

    }

    return state
}


