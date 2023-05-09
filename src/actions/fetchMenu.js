export const fetchMenu = () => (dispatch) => {
  console.log("reached to actions");
    fetch("http://localhost:3004/menu")
      .then((res) => res.json())
      .then((menu) =>
        dispatch({
          type: "MENU_LOAD",
          payload: menu
        })
      );
  };
  