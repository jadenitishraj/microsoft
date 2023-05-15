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

export const addproductlinks = (productitem) =>(dispatch)=>{

    console.log(productitem)
 fetch("http://localhost:3004/productlinks",{
    method:"POST",
    headers:{
        "Content-Type": "application/json"
       
    },
    body: JSON.stringify(productitem)
 }
 )
 .then((result)=>{result.json();
    console.log(result)
})
.then((result)=>{console.log(result)
    dispatch({
        type:"ADD_productlinks",
        payload:result
    })})



}

export const deleteproductlinks = (id) =>(dispatch)=>{

    console.log(id)
 fetch(`http://localhost:3004/productlinks/${id}`,{
    method:"DELETE"

 }
 )
 .then((deletedresult)=>{deletedresult.json();
    console.log(deletedresult)
})
.then((deletedresult)=>{console.log(deletedresult)
    dispatch({
        type:"DELETE_productitem",
        payload:id
    })})



}
