import React from "react";
import classes from "./Button.module.css"
import { Link } from "react-router-dom";

const Buttton = (props) => {
    if(props.name === "addexpense"){
        return <Link to = "/signedin/addexpense"><button className={classes.functionalbuttons}>ADD</button></Link>
    }
    if(props.name === "submit"){
        return <Link to = "/signedin/home"><button className={classes.functionalbuttons}>SUBMIT</button></Link>
    }
    if(props.name === "home"){
        return <Link to = "/signedin/home"><button className={classes.functionalbuttons}>HOME</button></Link>
    }
    return <div>
        <button className={classes.functionalbuttons} onClick = {props.onClickNightMode}>NIGHT-MODE</button>
    </div>
}

export default Buttton;