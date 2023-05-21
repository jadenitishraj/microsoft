export const fetchproductlinks = () => (dispatch) => {
    fetch('http://localhost:3004/productlinks')
        .then(respone => respone.json())
        .then(data => {
            console.log(data)
            dispatch({
                type: 'GET_productlinks',
                payload: data
            })
        })
};

export const addproductlinks = (productitem) => (dispatch) => {

    console.log(productitem)
    fetch("http://localhost:3004/productlinks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify(productitem)
    }
    )
        .then((result) => result.json())
        .then((resultdata) => {
            dispatch({
                type: "ADD_productlinks",
                payload: resultdata
            })
        })



}

export const deleteproductlinks = (id) => (dispatch) => {

    console.log(id)
    fetch(`http://localhost:3004/productlinks/${id}`, {
        method: "DELETE"

    }
    )
        .then((deletedresult) => deletedresult.json() )
        .then((result) => {
            console.log(result)
            dispatch({
                type: "DELETE_productitem",
                payload: id
            })
        })



}


export const updateproductlinkslist = (updatedValue,id) => (dispatch) => {

    console.log(updatedValue,id)

    fetch(`http://localhost:3004/productlinks/${id}`, {
        method: "PUT",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(updatedValue)
      

    }
    )
        .then((response) => response.json() )
        .then((result) => {
            console.log(result)
            dispatch({
                type: "UPDATE_productitem",
                payload: result
            })
        })



}
