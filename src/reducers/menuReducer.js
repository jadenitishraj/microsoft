const initialState = {
  menu: []
};

export default function (state = initialState, action) {
  // if (action.type === "MENU_LOAD") {
  //   return {
  //     ...state,
  //     menu: action.payload
  //   };
  // }

  switch (action.type) {
    case 'MENU_LOAD':
      return {
        ...state,
        menu: action.payload
      };
    case 'ADD_MENU':
      return {
        ...state,
        menu: [...state.menu, action.payload]
      };
    case 'DELETE_MENU':
      const updatedMenu = [...state.menu]   // copy
      const deletedArray = updatedMenu.filter((updatedMenus) => {
        if (updatedMenus.id === action.payload) {
          return false; //delete
        }
        return true
      })

      return {
        ...state,
        menu: deletedArray
      };
      case 'UPDATE_MENU':
        const existingMenuData = [...state.menu];   // copy

        const updatedMenuData = existingMenuData.map((data) => {
          if(action.payload.id === data.id) {
            return action.payload;    // {id:25, menu_name:Aboutus 2}
          }
          return data
        });

        return {
          ...state,
          menu: updatedMenuData
        };
  }


  return state;
}
