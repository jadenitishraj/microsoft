const initialState={

    footerheading:[]
}



export default  (state=initialState,action)=>{


    if(action.type==='GET_HEADINGS'){

    return {
        ...state,
        footerheading:action.payload
    }

    }else if(action.type==='ADD_MENU'){
        return {
            ...state,
            footerheading:[...state.footerheading,action.payload]
        }
         
            
        
    }

    return state;
}
