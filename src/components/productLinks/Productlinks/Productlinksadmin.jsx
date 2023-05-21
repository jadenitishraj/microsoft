import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchproductlinks } from "../../../actions/fetchproductlinks";
import { addproductlinks, deleteproductlinks, updateproductlinkslist } from "../../../actions/fetchproductlinks"
import { Button, TextField } from '@mui/material';

import ProductForm from './ProductForm'
import ProductupdateForm from './ProductupdateForm'

export default function Productlinksadmin() {

    const dispatch = useDispatch();
    const productlinklist = useSelector((state) => state.productlinkData.product_links);

    const [productitem, setProductitem] = useState({});
    const [productimgitem, setProductimgitem] = useState({});
    const [edititem, setEdititem] = useState({});
    const [cancelItem, setCancelItem] = useState(false);

const [displayupdateform,setDisplayupdateform]= useState(false);
  




    const submitupdateddata =(updatedValue,id)=>{

    //    const {linkname,id}= updatedValue;

        // console.log(linkname,id)


       
        //dispatch(updateproductlinkslist(linkname,id))
       dispatch(updateproductlinkslist(updatedValue,id));
  
        }


    useEffect(() => {
        dispatch(fetchproductlinks())
      
    }, [])

    // useEffect(()=>{
    //     console.log(edititem)
    // },[edititem])



    // upload the data to api using post method:
    const uploadthedata = (e) => {
        e.preventDefault();
        dispatch(addproductlinks(productitem))
        // dispatch(addproductlinks(productimgitem))
        // setProductitem({});
        // setProductimgitem({})
        console.log(productimgitem)
        console.log(productitem)
    }


    //text box data
    const handledata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setProductitem((prevState) =>
            ({ ...prevState, [name]: value }));
        setProductimgitem((prevState) => ({ ...prevState, [name]: value }));

        console.log(productitem);
        console.log(productimgitem);
    }


    const deleteitem = (e) => {
        console.log(e);
        dispatch(deleteproductlinks(e));
    }


    //update function button
    const updatefunction = (item) => {
        setCancelItem(true);
        setDisplayupdateform(true);
        console.log(item);

        const { name, value }= item
console.log(item.linkname,item.img,item.id)
        // setEdititem((prevState)=>({
        //     ...prevState,
        //     [name]:value
        // }))
       // setEdititem({...edititem,linkname:item.linkname})
       setEdititem({ linkname: item.linkname ,id:item.id,img:item.img})
    //setEdititem(item)
        // dispatch(updateproductlinkslist(e))
       console.log(edititem);
    }


    return (
        <div>
            {/* post the data filed   name="linkname"  */}
            {/*<TextField type="text" variant="standard" name="linkname" onChange={handledata} defaultValue={edititem ? edititem.linkname : productitem.value || ''} />&nbsp; */}
       
        {!displayupdateform && <TextField type="text" variant="standard" name="linkname" onChange={handledata}  />}
            {/* <TextField type="text" variant="standard" name="img" onChange={handledata} />&nbsp; */}
            {!displayupdateform && <TextField type="text" variant="standard" name="img" onChange={handledata}  />}
        {!displayupdateform && <Button onClick={uploadthedata} variant="contained" color="primary"> Submit </Button>}
           



            <br />

            <h2>Get Productlinks data</h2>

            {
                productlinklist &&
                productlinklist.map((item) => {
                    // console.log(item)
                    return (
                        <ul key={item?.id}>
                            <li  >{item?.linkname}&nbsp;

                                <Button size="small" variant="contained" color="secondary" onClick={() => updatefunction(item)}>Update</Button>

                                <Button size="small" variant="contained" color="warning" onClick={() => deleteitem(item.id)}>Delete</Button>
                            </li>
                        </ul>
                    );
                })
            }

            <br />
            {<ProductForm updatefunction={updatefunction} />}
            {displayupdateform && <ProductupdateForm edititem={edititem}  cancelItem={cancelItem} setCancelItem={setCancelItem}  submitupdateddata={submitupdateddata}/>}
        </div>

    )
}



