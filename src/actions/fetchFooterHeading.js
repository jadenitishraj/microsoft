import { useDispatch  } from 'react-redux';


export const fetchFooterHeading = () => (dispatch) => {
  fetch("http://localhost:3004/footer-heading")
    .then((res) => res.json())
    .then((menu) =>
      dispatch({
        type: "FOOTER_HEADING_LOAD",
        payload: menu
      })
    );
};

export const addFooterHeading = (data) => (dispatch) => {
  const url = 'http://localhost:3004/footer-heading';
  // const data = { "body": "some comment1234", "postId": 5 };

  console.log(data);

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
        type: "ADD_FOOTER_HEADING",
        payload: result
      })
    })
    .catch(error => {
      console.error('Error:', error);
    });
};


export const deleteFooterHeading = (id) => (dispatch) => {
  const url = `http://localhost:3004/footer-heading/${id}`;
  // const data = { "body": "some comment1234", "postId": 5 };

  fetch(url, {
    method: 'DELETE',
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error deleting data');
    }
    dispatch({
      type: "DELETE_FOOTER_HEADING",
      payload: id
    })
  })
  .catch(error => {
    console.error('Error:', error);
  });
};


export const updateFooterHeading = (updatedText, id) => (dispatch) => {
  const url = `http://localhost:3004/footer-heading/${id}`;
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
        type: "UPDATE_FOOTER_HEADING",
        payload: result
      })
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

