import { useDispatch } from "react-redux";

export const Homecards=()=>(dispatch)=>{
    
    fetch("http://localhost:3004/homecardslist")
        .then(response =>response.json())
        .then(result=>{
            console.log(result)
            dispatch({
            type:"Get_homecards",
            payload: result})}) 
}

export const PostHomecards=(data)=>(dispatch)=>{
    console.log(data)
    fetch("http://localhost:3004/homecardslist",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response =>response.json())
        .then(result=>{
            console.log(result)
            dispatch({
            type:"POST_homecards",
            payload: result})
        }
            ) 
}