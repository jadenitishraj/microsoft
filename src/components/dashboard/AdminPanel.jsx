import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";




export default function AdminPanel() {
  return (
    <div>
      <h1 className="container" >Admin Panel</h1>
      {/* <div className="container box1">
        <Card className="cards" variant="outlined">
          <Link to="/admin-header">Header</Link>

        </Card>
        <Card className="cards" variant="outlined">
          <Link to="/admin-Productlinks">Product links</Link>

        </Card>
        <Card className="cards" variant="outlined">
       Showcase
        </Card>
        <Card className="cards" variant="contained">
        <Link to="/admin-homecards">homecards 1</Link>

        </Card>
        <Card className="cards" variant="outlined">
        <Link to="/admin-homecards">homecards 2</Link>
        </Card>


      </div> */}
 <div className="container box1">
<Button variant="contained" href="/admin-homecards">HomeCards 1</Button><br />
<br  />
<Button variant="contained" href="/admin-homecards">HomeCards 2</Button><br />
<br  />
<Button variant="contained" href="/admin-header">Header</Button><br   />
<br  />
<Button variant="contained" href="/admin-Productlinks">ProductLinks</Button><br    />
<br  />
<Button variant="contained" href="/admin-Productlinks">Footer</Button><br    />
<br  />
<Button variant="contained" href="/admin-Productlinks">Footer-Bottom</Button><br    />
    </div>
    </div>
  );
}
