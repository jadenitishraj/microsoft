import {useEffect, useState} from 'react';
import { Button } from "@mui/material";


export default function Updateform(props){

 console.log(props.updatedatatext,props.editedfield)
const [efield,setEfield] = useState('');

const [newEditedValue,setNewEditedValue] = useState('');

useEffect(()=>{
  setEfield(props.editedfield)
},[props.editedfield])

    return (
        <>
      <h2>Edit Form</h2>
   
  <strong>{props.editedfield}</strong><input type="text" defaultValue={props.updatedatatext[efield]} onChange={(e)=>setNewEditedValue(e)}></input>

     <Button onClick={()=>props.updatedatafn(props.updatedatatext.id,newEditedValue,efield)}>Submit</Button>
        </>
      
            
    )
}