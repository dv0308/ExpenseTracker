import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import classes from "./SignUp.module.css"

const SignUp = (props) => {

    const history = useHistory()
    var [name,setname] = useState("");
    var [age, setage] = useState("");

    const onFormSubmitHandler = (event) => {
        props.onIsNameChangeHandler(name);
        event.preventDefault();
        history.push("/signedin/home")
    }

    const onNameChangeHandler = (event) => {
        setname(name = event.target.value)
    }

    const onAgeChangeHandler = (event) => {
        setage(age = event.target.value)
    }

    return  <div className={classes.signupform}>
    <form onSubmit={onFormSubmitHandler}  className = {classes.loginform}>
        <label for="name">ENTER NAME</label>
        <input type="text" placeholder="Enter Name" name="name" value={name} onChange={onNameChangeHandler}></input>
        <label for="age">ENTER AGE</label>
        <input type="number" placeholder = "Enter Age" name="age" value={age} onChange={onAgeChangeHandler}></input>
        <button type = "submit">SUBMIT</button>
    </form>
    </div>
}

export default  SignUp