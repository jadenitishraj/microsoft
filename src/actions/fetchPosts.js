export const fetchPersons = () => (dispatch) => {
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => res.json())
  //   .then((posts) =>



  //     dispatch({
  //       type: "INITIAL_PERSONS_LOAD",
  //       payload: posts
  //     })
  //   );


  const url = 'http://localhost:3004/menu';
  const data = { "body": "some comment1234", "postId": 5 };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });

    // dispatch({
    //     type: "INITIAL_PERSONS_LOAD",
    //     payload: result
    //   })

};
