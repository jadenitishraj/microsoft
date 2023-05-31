import { useDispatch, useSelector } from 'react-redux'
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from 'react';


import { GETFooterBottom, POSTFooterBottom, addMenu } from "../../../actions/FooterBottom"

export default function FooterBottomAdmin() {

    const finalreduxdata = useSelector((state) => state.footerbottomData.footerheading)
    const dispatch = useDispatch();


    const [postData, setPostData] = useState('');

    console.log(finalreduxdata);

    useEffect(() => {
        dispatch(GETFooterBottom());
    }, [])

    console.log(finalreduxdata);
    const onchangedata = (e) => {
        console.log(e.target.value);
        setPostData(e.target.value);
    }

    const submitdata = () => {
        console.log("testing");
        // dispatch(POSTFooterBottom(postData));
        dispatch(addMenu(postData));
    }
    return (
        <>
            <section>
                <h2>Post the data for Footer Bottom Admin Page</h2>
                <TextField id="standard-basic" label="Standard" variant="standard" onChange={(e) => onchangedata(e)} />
                <Button variant="contained" onClick={submitdata}>Submit</Button>
            </section>
            <h3> Get the data for the Footer Bottom </h3>
            {
                finalreduxdata && finalreduxdata.map((item, index) => {

                    return (
                        <div key={index}>
                            <li>{item.Heading}</li>
                        </div>
                    )
                })
            }


        </>


    );
}

