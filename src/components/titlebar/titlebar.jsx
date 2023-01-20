import React from "react";
import classes from "./titlebar.module.css"


const TitleBar = (props) => {
    return (
        <div className={classes.titlebar}>
            <img src = "../../../images/download.png" className={classes.profilepic} alt="profileimage"></img>
            <div className={classes.name}>
                <h2>WELCOME</h2>
                <h1>{props.isname}</h1>
            </div>
        </div>
    )

}

export default TitleBar