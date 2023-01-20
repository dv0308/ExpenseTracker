import React from "react";
import Expenses from "../../ExpenseListItem"
import classes from "./ExpenseList.module.css"


const ExpenseList = (props) => {

    if(props.isstyle === "App2"){
        return <div className={classes.expenselist}>
        {Expenses.map( function(expense){
            return <div className={classes.expenseitems1}>
                <div className={classes.expensename}>{expense.name}</div>
                <div className={classes.expenseprice}>${expense.price}</div>
                <div className={classes.expensedate}>
                    <span className={classes.day}>{expense.date.getDate()}/</span>
                    <span className={classes.month}>{expense.date.getMonth()+1}/</span>
                    <span className={classes.year}>{expense.date.getFullYear()}</span>
                </div>
            </div>
        })}
    </div>
    }
        return <div className={classes.expenselist}>
        {Expenses.map( function(expense){
            return <div className={classes.expenseitems}>
                <div className={classes.expensename}>{expense.name}</div>
                <div className={classes.expenseprice}>${expense.price}</div>
                <div className={classes.expensedate}>
                    <span className={classes.day}>{expense.date.getDate()}/</span>
                    <span className={classes.month}>{expense.date.getMonth()+1}/</span>
                    <span className={classes.year}>{expense.date.getFullYear()}</span>
                </div>
            </div>
        })}
    </div>

}

export default ExpenseList;