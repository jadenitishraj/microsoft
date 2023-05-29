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
      <div className="container box1">
        <Card className="cards" variant="outlined">
          <Link to="/admin-header"><h1>Header</h1></Link>
         
        </Card>
        <Card className="cards" variant="outlined">
          <Link to="/admin-Productlinks"><h1>Header</h1></Link>
         
        </Card>
        <Card className="cards" variant="outlined">
          <h1>Showcase</h1>
        </Card>
        <Card className="cards" variant="outlined">
          <h1>home Cards1</h1>
        </Card>
        <Card className="cards" variant="outlined">
          <h1>home Cards2</h1>
        </Card>


      </div>
    </div>
  );
}
