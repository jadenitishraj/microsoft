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

      console.log(action.payload)
      
      const ExitingArray = [...state.Homecardslistarray]
      const deletedarray = ExitingArray.filter((z)=>{

         if(z.id!=action.payload.id){
            return true;
         }

         return false;
      })
      console.log(deletedarray)
 return {
   ...state,   
   Homecardslistarray:deletedarray

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

