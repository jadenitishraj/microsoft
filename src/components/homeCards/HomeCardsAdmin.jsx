import { useEffect, useState } from "react";
import { Button, Select, MenuItem, TextField, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";


import { Homecards,PostHomecards } from '../../actions/Homecards'

export default function HomeCardsAdmin() {
    const homecardslistdata = useSelector((state) => state.Homecardslist.Homecardslistarray);
    const dispatch = useDispatch();

    const [homecardslist, setHomecardslist] = useState({})

    useEffect(() => {
        dispatch(Homecards())
    }, [])

    const onchangedata = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target

        setHomecardslist((prevState) => ({
            ...prevState,
            [name]: value

        }))

    }



    const Submitteddata = () => {
        console.log(homecardslist);
        dispatch(Homecards())
        console.log(homecardslistdata)
dispatch(PostHomecards(homecardslist));

    }


    // const filteredtype1Data = homecardslistdata.filter((i, index) => {
    //     console.log(i.type1);
    //     return i.type1
    // })
    // const filteredtype2Data = homecardslistdata.filter((i, index) => {
    //     console.log(i.type1);
    //     return i.type2
    // })

console.log(homecardslistdata);
    return (
        <>

            <h1>Get HomeCards data</h1>

            <h2>Get HomeCards Type 1 data</h2>
            
            {homecardslistdata.map((homecardsitems, index) => (
                <div key={index}>
                    { homecardsitems.type1.map((type1data, type1index) => (
                        <div key={type1index}>
                            <li>{type1data.Url}</li>
                            <li>{type1data.Heading}</li>
                            <li>{type1data.Content}</li>
                            <li>{type1data.Link}</li>
                        </div>
                    ))}

                </div>

            ))}

            <h2>Get HomeCards Type 2 data</h2>
            {homecardslistdata.map((homecardsitems, index) => (
                // console.log(homecardsitems)
                <div key={index}>
                    {homecardsitems.type2.map((type2data, type2index) => (
                        <div key={type2index}>
                            <li>{type2data.Url}</li>
                            <li>{type2data.Heading}</li>
                            <li>{type2data.Content}</li>
                            <li>{type2data.Link}</li>
                        </div>
                    ))}

                </div>

            ))}


            <h2>Post the data textfield</h2>
            <TextField variant="outlined" label="urldata" name="urldata" onChange={onchangedata} /> <Button color="secondary">Update</Button> <Button color="success">DELETE</Button><br />
            <br />
            <TextField variant="outlined" label="Headingdata" name="Headingdata" onChange={onchangedata} /> <Button color="secondary">Update</Button>  <Button color="success">DELETE</Button><br />
            <br />

            <TextField variant="outlined" label="Contentdata" name="Contentdata" onChange={onchangedata} /> <Button color="secondary">Update</Button>  <Button color="success">DELETE</Button><br />
            <br />

            <TextField variant="outlined" label="Contentlinkdata" name="Contentlinkdata" onChange={onchangedata} /> <Button color="secondary">Update</Button> <Button color="success">DELETE</Button><br />

            <br />

            <InputLabel>Homecardselectiontype</InputLabel>
            <Select label="HomeCardsType">
                <MenuItem value="Type1">Type1</MenuItem>
                <MenuItem value="Type2">Type2</MenuItem>
            </Select><br />
            <br />

            <Button variant="contained" color="secondary" onClick={Submitteddata}>Submit</Button>



        </>
    )



}