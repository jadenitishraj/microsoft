import { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';


export default function ProductupdateForm(props) {

    // const [updatedValue,setUpdatedValue]=useState(props.edititem.linkname)
    const [updatedValue, setUpdatedValue] = useState({})

    useEffect(() => {
        setUpdatedValue({ linkname: props.edititem.linkname, img: props.edititem.img, id: props.edititem.id })
    }, [props.edititem])

    const changedata = (e) => {
        console.log(e)
        const { name, value } = e.target;

        //    console.log(e.target.name)
        //    console.log(linkname,img,id)
        // setUpdatedValue(itemd.target.value)


        //setUpdatedValue({linkname:e.target.name,img:e.target.img,id:e.target.id})

        setUpdatedValue((prevState) => 
        (
            {



                ...prevState,
                [name]: value,
            })
        );


        console.log(updatedValue)

    }

    const cancelfn = () => {
        console.log('as')
        console.log(updatedValue);

        setUpdatedValue({ linkname: '', id: '', img: '' })
        props.setCancelItem(false);
    }


    return (
        <div>
            <h1>Update form</h1>

            {/* update the data filed  */}

            <TextField type="text" variant="standard" name="linkname" onChange={changedata} value={updatedValue.linkname} />&nbsp;
            <TextField type="text" variant="standard" name="img" onChange={changedata} value={updatedValue.img} />&nbsp;
            {props.cancelItem && <Button onClick={cancelfn} variant="contained" color="secondary">Cancel</Button>}
            <Button variant="contained" onClick={() => props.submitupdateddata(updatedValue, props.edititem.id)} color="primary"> UpdatedValuebtn </Button>



        </div>
    )
}

