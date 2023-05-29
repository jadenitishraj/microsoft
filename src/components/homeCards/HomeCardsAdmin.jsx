import { useEffect, useState } from "react";
import { Button, Select, MenuItem, TextField, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { UpdateHomecardsform } from "./Updatehomecardsform";
import { Homecards, PostHomecards, DeleteHomecards, UpdatedataHomecards } from '../../actions/Homecards'

export default function HomeCardsAdmin() {
    const homecardslistdata = useSelector((state) => state.Homecardslist.Homecardslistarray);
    const dispatch = useDispatch();

    const [homecardslist1, setHomecardslist1] = useState({})
    const [updatedatatext, setUpdatedatatext] = useState({});


    useEffect(() => {
        dispatch(Homecards())
    }, [])

    const onchangedata = (e) => {

        const { name, value } = e.target

        setHomecardslist1((prevState) => ({
            ...prevState,
            [name]: value

        }))

    }



    const Submitteddata = (e) => {

        dispatch(PostHomecards(homecardslist1));

    }


    console.log(homecardslistdata);

    const deletedata = (id) => {


        const i = id.id
        dispatch(DeleteHomecards(i))



    }

    const updatedata = (id, field) => {
        const u = id.id;

        console.log(id)
        setUpdatedatatext({
            "url_data": id.url_data
        });

        console.log(updatedatatext);
        dispatch(UpdatedataHomecards(u, field))

    }

    return (
        <>
            <h2>Data for the Type 1</h2>
            {
                homecardslistdata.map((z, index) => {


                    if (z.HomeCardsType === 'Type1') {

                        return (

                            <div key={index}>

                                <li> <strong>img url</strong> {z.urldata} </li>

                                <li>   <strong>Headingdata</strong> {z.Headingdata} </li>

                                <li>  <strong>Description</strong> {z.Contentdata}</li>

                                <li> <strong>Link</strong> {z.Contentlinkdata} </li>

                                <button onClick={() => deletedata(z)}>Delete</button>
                            
                            </div>
                        )
                    }
                })
            }


            <h2>Data for the Type 2</h2>
            {
                homecardslistdata.map((z, index) => {


                    if (z.HomeCardsType === 'Type2') {

                        return (
                            <div key={index}>
                                <ol> <strong>img url</strong> {z.urldata} </ol>

                                <ol>   <strong>Headingdata</strong> {z.Headingdata} </ol>

                                <ol>  <strong>Description</strong> {z.Contentdata}</ol>

                                <ol> <strong>Link</strong> {z.Contentlinkdata} </ol>

                                <button onClick={() => deletedata(z)}>Delete</button>
                              
                            </div>
                        )
                    }
                })
            }


            {/* <h2>Get the type 1 data</h2>
            {homecardslistdata && homecardslistdata.map((z, index) => {
                console.log(z);
                console.log(index);
                return (
                    <div key={index}>
                        {
                            z?.map((innerdata, innerindex) => {
                                console.log(innerdata);
                                if (innerdata?.HomeCardsType === 'Type1') {
                                    return (
                                        <div key={innerindex}>
                                            <li>{innerdata?.urldata}</li  >
                                            <li>{innerdata?.Headingdata}</li>
                                            <li>{innerdata?.Contentdata}</li>
                                            <li>{innerdata?.Contentlinkdata}</li>
                                        </div>
                                    )
                                }

                            })
                        }
                    </div>
                )








            })}




            <h2>Get the type 2 data</h2>

            {homecardslistdata?.map((z2, index2) => {
                console.log(z2);

                return (
                    <div key={index2}>
                        {
                            z2?.map((innerdata2, innerindex2) => {
                                console.log(innerdata2);
                                if (innerdata2?.HomeCardsType === 'Type2') {
                                    return (
                                        <div key={innerindex2}>
                                            <li>{innerdata2?.urldata}</li  >
                                            <li>{innerdata2?.Headingdata}</li>
                                            <li>{innerdata2?.Contentdata}</li>
                                            <li>{innerdata2?.Contentlinkdata}</li>
                                        </div>
                                    )
                                }

                            })
                        }
                    </div>
                )


            })} */}


            <h2>Post the data textfield</h2>

            <TextField variant="outlined" label="urldata" name="urldata" onChange={onchangedata} /> <br />
            <br />
            <TextField variant="outlined" label="Headingdata" name="Headingdata" onChange={onchangedata} /> <br />
            <br />

            <TextField variant="outlined" label="Contentdata" name="Contentdata" onChange={onchangedata} />  <br />
            <br />

            <TextField variant="outlined" label="Contentlinkdata" name="Contentlinkdata" onChange={onchangedata} /> <br />

            <br />

            <InputLabel>Homecardselectiontype</InputLabel>
            <Select label="HomeCardsType" name="HomeCardsType" onChange={onchangedata} >
                <MenuItem value="Type1">Type1</MenuItem>
                <MenuItem value="Type2">Type2</MenuItem>
            </Select><br />

            <Button variant="contained" color="secondary" onClick={Submitteddata}>Submit</Button>



        </>


    )



}