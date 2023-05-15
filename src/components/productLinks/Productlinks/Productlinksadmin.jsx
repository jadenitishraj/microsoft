
// import { useState, useEffect } from "react"

// import { useDispatch, useSelector } from "react-redux";

// import { fetchproductlinks } from "../../../actions/fetchproductlinks";
// import { addproductlinks } from "../../../actions/fetchproductlinks"
// import { Button, TextField } from '@mui/material';

// export default function Productlinksadmin() {

//     const dispatch = useDispatch();
//     const productlinklist = useSelector((state) => state.productlinkData.product_links);

//     const [data, setData] = useState({ linkname: "", img: "" });


//     useEffect(() => {
//         dispatch(fetchproductlinks())
//     }, [])


//     //upload the data to api using post method:
//     const uploadthedata = (e) => {
//         e.preventDefault();

//         dispatch(addproductlinks(data))

//     }

//     //text data
//     const handledata = (e) => {
//         console.log(e.target.value)
//         setData({ ...data, linkname: e.target.value })
//         console.log(data)
//     }

//     return (
//         <div>

//             {/* <TextField type="text" variant="standard" value={data.linkname} onChange={handledata} />&nbsp;
//             <Button onClick={uploadthedata} variant="contained" color="primary"> Submit </Button> */}


//             <form onSubmit={uploadthedata}>
//                 <input type="text" value={data.linkname} onChange={handledata} />
//                 <button type="Submit" className="btn btn primary">Submit</button>

//             </form>
//             <br />

//             <h2>Get Productlinks data</h2>

//             {
//                 productlinklist &&
//                 productlinklist.map((item) => {
//                     return (

//                         <>
//                             <ul>
//                                 <li key={item.id} >{item.linkname}&nbsp;
//                                     <Button size="small" variant="contained" color="secondary">Update</Button></li>
//                             </ul>
//                         </>
//                     );
//                 }
//                 )
//             }

//             <br />

//         </div>
//     )
// }


import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchproductlinks } from "../../../actions/fetchproductlinks";
import { addproductlinks,deleteproductlinks } from "../../../actions/fetchproductlinks"
import { Button, TextField } from '@mui/material';

export default function Productlinksadmin() {

    const dispatch = useDispatch();
    const productlinklist = useSelector((state) => state.productlinkData.product_links);

    const [productitem, setProductitem] = useState({ linkname: "",img: "" });

    useEffect(() => {
        dispatch(fetchproductlinks())
    }, [])

    //upload the data to api using post method:
    const uploadthedata = (e) => {productitem
        e.preventDefault();
        console.log(productitem);

        dispatch(addproductlinks(productitem))

        console.log(productitem);
    }

    //text data
    const handledata = (e) => {
        console.log(e.target.value)
        setProductitem({ ...productitem, linkname: e.target.value })
        console.log(productitem)
    }


  const deleteitem =(e)=>{
    console.log(e);
  dispatch(deleteproductlinks(e));
  }
    return (
        <div>

            <TextField type="text" variant="standard" value={productitem.linkname} onChange={handledata} />&nbsp;
            <Button onClick={uploadthedata} variant="contained" color="primary"> Submit </Button>

            <br />

            <h2>Get Productlinks data</h2>

            {
                productlinklist &&
                productlinklist.map((item) => {
                    return (
                        <ul>
                            <li key={item.id} >{item.linkname}&nbsp;
                                <Button size="small" variant="contained" color="secondary">Update</Button>
                                {/* <Button size="small" variant="contained" color="warning">Delete</Button> */}
                                <Button size="small" variant="contained" color="warning" onClick={()=>{deleteitem(item.id)}}>Delete</Button>
                            </li>
                        </ul>
                    );
                })
            }

            <br />

        </div>
    )
}
