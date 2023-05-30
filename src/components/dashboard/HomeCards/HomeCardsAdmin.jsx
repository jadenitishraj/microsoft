import { useEffect, useState } from "react";
import { Button, Select, MenuItem, TextField, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// import {UpdateHomecardsform } from './UpdateHomecardsform'


import { Homecards, PostHomecards, DeleteHomecards, UpdatedataHomecards } from '../../../actions/Homecards'
import Updateform from './Updateform';

export default function HomeCardsAdmin() {
    const homecardslistdata = useSelector((state) => state.Homecardslist.Homecardslistarray);
    const dispatch = useDispatch();

    const [homecardslist1, setHomecardslist1] = useState({})
    const [updatedatatext, setUpdatedatatext] = useState({});

    const [showeditbtn, setshoweditbtn] = useState(false);
    const [Cancelbtn, setCancelbtn] = useState(false);

    const [showeditform, setShoweditform] = useState(false);

    const [editedfield, setEditedfield] = useState('');


    const [finalRenderData, setFinalRenderData] = useState([]);

    useEffect(() => {
        dispatch(Homecards())
    }, [])
    useEffect(() => {
        setFinalRenderData(homecardslistdata)

    }, [homecardslistdata]);

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
    const Editdatafn = (id, field, e) => {
        const u = id.id;
        console.log(id, field)
        setEditedfield(field);
        setUpdatedatatext(id);

    }

    const updatedatafn = (id, editedvalue, efield) => {
        console.log(id);
        console.log(editedvalue.target.value);
        console.log(efield);
        dispatch(UpdatedataHomecards(id, editedvalue.target.value, efield));
        setShoweditform(false);
        setshoweditbtn(false);
        setCancelbtn(false);
    }


    return (
        <>
            {showeditform ? (<Updateform updatedatatext={updatedatatext} editedfield={editedfield} updatedatafn={updatedatafn} />) : ''}

            <h2>Data for the Type 1</h2>
            {
                finalRenderData.map((z, index) => {


                    if (z.HomeCardsType === 'Type1') {

                        return (

                            <div key={index}>

                                <li> <strong>img url</strong> {z.urldata} {showeditbtn ? (<button onClick={() => Editdatafn(z, 'urldata')}>Edit</button>) : ''} </li>

                                <li>   <strong>Headingdata</strong> {z.Headingdata}{showeditbtn ? (<button onClick={() => Editdatafn(z, 'Headingdata')}>Edit</button>) : ''} </li>

                                <li>  <strong>Description</strong> {z.Contentdata} {showeditbtn ? (<button onClick={() => Editdatafn(z, 'Contentdata')}>Edit</button>) : ''}</li>

                                <li> <strong>Link</strong> {z.Contentlinkdata} {showeditbtn ? (<button onClick={() => Editdatafn(z, 'Contentlinkdata')}>Edit</button>) : ''}</li>

                                <button onClick={() => deletedata(z)}>Delete</button>
                                <button onClick={() => {
                                    setshoweditbtn(true);
                                    setCancelbtn(true);
                                    setShoweditform(true);
                                }}>updatedata</button>
                                {Cancelbtn ? (<button onClick={() => {
                                    setEditedfield(false);
                                    setshoweditbtn(false);
                                    setShoweditform(false);
                                    setCancelbtn(false);

                                }} >Cancel</button>) : ''}

                            </div>
                        )
                    }
                })
            }


            <h2>Data for the Type 2</h2>
            {
                finalRenderData.map((z, index) => {


                    if (z.HomeCardsType === 'Type2') {

                        return (
                            <div key={index}>
                                <li> <strong>img url</strong> {z.urldata} {showeditbtn ? (<button onClick={() => Editdatafn(z, 'urldata')}>Edit</button>) : ''} </li>

                                <li>   <strong>Headingdata</strong> {z.Headingdata}{showeditbtn ? (<button onClick={() => Editdatafn(z, 'Headingdata')}>Edit</button>) : ''} </li>

                                <li>  <strong>Description</strong> {z.Contentdata} {showeditbtn ? (<button onClick={() => Editdatafn(z, 'Contentdata')}>Edit</button>) : ''}</li>

                                <li> <strong>Link</strong> {z.Contentlinkdata} {showeditbtn ? (<button onClick={() => Editdatafn(z, 'Contentlinkdata')}>Edit</button>) : ''}</li>

                                <button onClick={() => deletedata(z)}>Delete</button>
                                <button onClick={() => {
                                    setshoweditbtn(true);
                                    setCancelbtn(true);
                                    setShoweditform(true);
                                }}>updatedata</button>
                                {Cancelbtn ? (<button onClick={() => {
                                    setEditedfield(false);
                                    setshoweditbtn(false);
                                    setShoweditform(false);
                                    setCancelbtn(false);

                                }} >Cancel</button>) : ''}

                            </div>
                        )
                    }
                })
            }
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