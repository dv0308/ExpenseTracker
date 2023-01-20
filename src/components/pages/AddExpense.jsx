import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./AddExpense.module.css"

const AddExpense = (props) => {
    const history = useHistory()

    var [expensename, setexpensename] = useState("");
    var [expenseprice, setexpenseprice] = useState("");
    var [expensedate, setexpensedate] = useState("");

    function onNameChangeHandler(event){
        setexpensename(event.target.value)
    }

    function onPriceChangeHandler(event){
        setexpenseprice(event.target.value)
    }

    function onDateChangeHandler(event){
        setexpensedate(event.target.value)
    }

    function onSubmitHandler(event){

        expensedate = new Date(expensedate)
        props.addExpenseToList({
            expensename,expenseprice,expensedate
        })
        event.preventDefault();
        history.push("/signedin/home")
        
    }

    return <form onSubmit={onSubmitHandler} className = {classes.container}>
        <div className={classes.formcontents}>
            <label htmlFor= "itemname">Exnpense Name</label>
            <input type = "text" id = "itemname" onChange={onNameChangeHandler} name = "itemname" value={expensename} placeholder = "Name"></input>
            <label htmlFor = "itemprice">Price</label>
            <input type = "number" id = "itemprice" onChange={onPriceChangeHandler} name = "itemprice" value={expenseprice} placeholder = "Price"></input>
            <label htmlFor = "itemdate">Date</label>
            <input type = "date" id = "itemdate" onChange={onDateChangeHandler} name = "itemdate" value={expensedate}></input>
            <button type="submit">SUBMIT</button>
        </div>
    </form>
}

export default AddExpense;