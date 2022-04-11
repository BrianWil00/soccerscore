import React, { useState } from "react";
import classes from "./Login.module.css";
import Card from '../components/ui/Card'
import { Link } from "react-router-dom";

function MyTeams() {

    return(
      <div className={classes.mainDiv}>
      <h1 className={classes.heading}>MyTeams</h1>     
        <Card>
          <div className= {classes.content}>
            <div>Welcome to your Teams page where you can see your favourite teams individual info</div>
            <div className={classes.actions}>
              <Link to="/">
                <button>Return Home</button>
              </Link>
            </div>
          </div>
        </Card>
    </div>
    );
}
export default MyTeams;