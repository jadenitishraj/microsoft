const initialState={
    Homecardslistarray:[]
}

export default (state=initialState,action)=>{

if(action.type==="Get_homecards"){

 return{
    ...state,
    Homecardslistarray:[action.payload]
 }  

}else if(action.type==="POST_homecards"){

    return{
       ...state,
       Homecardslistarray:[...state.Homecardslistarray,action.payload]
       
    }  
   
   };


return state;
}

