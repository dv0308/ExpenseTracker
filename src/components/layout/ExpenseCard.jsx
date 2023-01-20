import React, { useState } from "react";
import classes from "./ExpenseCard.module.css"

const ExpenseCard = () => {

    const [isIncome, setIsIncome] = useState(900);
    const [isExpense, setIsExpense] = useState(764);

    return <div className={classes.expensecard}>
        <div className={classes.balance}>
            <h1>Balance</h1>
            <span>${isIncome-isExpense}</span>
        </div>
        <div className={classes.outerincome}>
        <img src = "../../../images/up.png" alt = "up"></img>
            <div className={classes.income}>
                <h1>Income</h1>
                <span>${isIncome}</span>
            </div>
            <img src = "../../../images/down.jpeg" alt = "down"></img>
            <div className={classes.expense}>
                <h1>Expense</h1>
                <span>-${isExpense}</span>
            </div>
        </div>
    </div>
}

export default ExpenseCard