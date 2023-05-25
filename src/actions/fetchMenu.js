import { useDispatch  } from 'react-redux';


export const fetchMenu = () => (dispatch) => {
  fetch("http://localhost:3004/menu")
    .then((res) => res.json())
    .then((menu) =>
      dispatch({
        type: "MENU_LOAD",
        payload: menu
      })
    );
};

export const addMenu = (data) => (dispatch) => {
  const url = 'http://localhost:3004/menu';
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
};


export const deleteMenu = (id) => (dispatch) => {
  const url = `http://localhost:3004/menu/${id}`;
  // const data = { "body": "some comment1234", "postId": 5 };

  fetch(url, {
    method: 'DELETE',
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error deleting data');
    }
    dispatch({
      type: "DELETE_MENU",
      payload: id
    })
  })
  .catch(error => {
    console.error('Error:', error);
  });
};


export const updateMenu = (updatedText, id) => (dispatch) => {
  const url = `http://localhost:3004/menu/${id}`;
  // const data = { "body": "some comment1234", "postId": 5 };

  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedText)
  })
    .then(response => response.json())
    .then(result => {

      dispatch({
        type: "UPDATE_MENU",
        payload: result
      })
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

