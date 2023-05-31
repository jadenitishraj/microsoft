

export const  GETFooterBottom=()=>(dispatch)=>{

    fetch('http://localhost:3004/homecardslist2')
    .then(response=>response.json())
    .then(result=>{
        console.log(result);
        dispatch({
            type:"GET_HEADINGS",
            payload:result
        })
    })
}

// export const POSTFooterBottom=(data)=>(dispatch)=>{
//     console.log(data)
//     fetch('http://localhost:3004/FooterBottom',{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response=>response.json())
//     .then(result=>{
//         console.log(result)
//         dispatch({
//             type:'POST_HEADERS',
//             payload: result
//         })
//         .catch(error=>{
//             console.log('Error:', error)
//         })
//     })
//}

export const addMenu = (data) => (dispatch) => {
    const url = 'http://localhost:3004/homecardslist2'
    // const data = { "body": "some comment1234", "postId": 5 };
  
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    
      .then(response => response.json())
      .then(result => {
        dispatch({
          type: "ADD_MENU",
          payload: result
        })
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }