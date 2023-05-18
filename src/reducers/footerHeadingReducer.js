const initialState = {
    footerHeading: []
  };
  
  export default function (state = initialState, action) {
    // if (action.type === "footerHeading_LOAD") {
    //   return {
    //     ...state,
    //     footerHeading: action.payload
    //   };
    // }
  
    switch (action.type) {
      case 'FOOTER_HEADING_LOAD':
        console.log(action);
        return {
          ...state,
          footerHeading: action.payload
        };
      case 'ADD_FOOTER_HEADING':
        return {
          ...state,
          footerHeading: [...state.footerHeading, action.payload]
        };
      case 'DELETE_FOOTER_HEADING':
        const updatedfooterHeading = [...state.footerHeading]   // copy
        const deletedArray = updatedfooterHeading.filter((updatedfooterHeadings) => {
          if (updatedfooterHeadings.id === action.payload) {
            return false; //delete
          }
          return true
        })
  
        return {
          ...state,
          footerHeading: deletedArray
        };
        case 'UPDATE_FOOTER_HEADING':
          const existingfooterHeadingData = [...state.footerHeading];   // copy
  
          const updatedfooterHeadingData = existingfooterHeadingData.map((data) => {
            if(action.payload.id === data.id) {
              return action.payload;    // {id:25, footerHeading_name:Aboutus 2}
            }
            return data
          });
  
          return {
            ...state,
            footerHeading: updatedfooterHeadingData
          };
    }
  
  
    return state;
  }
  