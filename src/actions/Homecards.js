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

// export const DeleteHomecards=(id,field)=>(dispatch)=>{
//     console.log(id,field)
//     fetch(`http://localhost:3004/homecardslist/${id}`,{
//         method:'PATCH',
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body: JSON.stringify({[field]:null})
//     })
//         .then(response =>response.json())
//         .then(result=>{
//             console.log(result)
//             dispatch({
//             type:"DELETE_homecards",
//             payload: {id,field}})
//         }
//             ) 
// }

export const UpdatedataHomecards=(id,editedvalue,efield)=>(dispatch)=>{
    console.log(id,editedvalue,efield)
    fetch(`http://localhost:3004/homecardslist/${id}`,{
        method:'PATCH',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({[efield]:editedvalue})
    })
        .then(response =>response.json())
        .then(result=>{
            console.log(result)
            dispatch({
            type:"updatedata_homecards",
            payload: {id,editedvalue,efield}})
        }
            ) 
}



export const DeleteHomecards=(id)=>(dispatch)=>{
    console.log(id)
    fetch(`http://localhost:3004/homecardslist/${id}`,{
        method:'DELETE'
    })
        .then(response =>response.json())
        .then((result)=>{
            console.log(result)
            dispatch({
            type:"DELETE_homecards",
            payload: {id}})
        }
            ) 
}

