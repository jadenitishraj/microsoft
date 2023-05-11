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



