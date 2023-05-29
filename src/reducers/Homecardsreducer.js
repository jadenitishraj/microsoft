const initialState = {
   Homecardslistarray: []
   // Homecardslistarray:{}
}

export default (state = initialState, action) => {

   if (action.type === "Get_homecards") {

      return {
         ...state,
         Homecardslistarray: action.payload
      }

   } else if (action.type === "POST_homecards") {

      return {
         ...state,
         Homecardslistarray: [...state.Homecardslistarray, action.payload]

      }

   } else if (action.type === "DELETE_homecards") {

      console.log(action.payload.field)
      console.log(action.payload.id)
      const field =action.payload.field;
      console.log(field)
      const ExitingArray = [...state.Homecardslistarray]
      console.log(ExitingArray)
      const DeletedItemArray = ExitingArray.map((i) => {
      if(i.id===action.payload.id){
         const newitem={...i}
         console.log(newitem);
         console.log(newitem[field]);
        delete newitem[field]
        console.log(newitem)
            return newitem
      }
      return i
      
      })
    console.log(DeletedItemArray)
 return {
   ...state,   
   Homecardslistarray:DeletedItemArray

 }

   }else if (action.type === "updatedata_homecards") {

      console.log(action.payload.field)
      console.log(action.payload.id)
      const field =action.payload.field;
      console.log(field)
      const ExitingArray = [...state.Homecardslistarray]
      console.log(ExitingArray)
      

   };



   return state;
}

