import { TextField } from "@mui/material"

export default UpdateHomecardsform=(props)=>{

    console.log(props.updatedatatext)
    
    return (
        <>
        <h2>Post the data textfield</h2>
    <TextField variant="outlined" label="urldata" name="urldata" onChange={onchangedata}  /> <br />
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