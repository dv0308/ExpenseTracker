import React, { useEffect, useState } from 'react';
import "./App.css"
import { Link, Route } from 'react-router-dom';
import TitleBar from './components/titlebar/titlebar';
import Button from './components/layout/Button';
import AddExpense from './components/pages/AddExpense';
import ExpenseList from './components/pages/ExpenseList';
import Expenses from "./ExpenseListItem"
import SignUp from './components/pages/SignUp';

function App() {

  const [loggedIn, setloggedIn] = useState(false);

  useEffect(() => {
    setloggedIn(true);
  },[])

  var [isstyle, setstyle] = useState("App");

  const onClickNightMode = () => {
    if(isstyle === "App"){
      setstyle(isstyle = "App2")
    }
    else{
      setstyle(isstyle = "App")
    }
  }

  const addExpenseToList = (data) => {
      Expenses.push({
        name : data.expensename,
        price : data.expenseprice,
        date : data.expensedate
      })
  }


  var [isname,setisname] = useState("User");
  const onIsNameChangeHandler = (data) => {
    setisname(isname = data);
  }

  return (
    <div>
      <Route path="/" exact>
          <SignUp onIsNameChangeHandler = {onIsNameChangeHandler}/>
      </Route>
      {loggedIn === true && <Route path = "/signedin">
      <div className={isstyle}>
            <TitleBar isname = {isname} />
            <div className="buttons">
              <Button name = "home"/>
              <Button name = "addexpense"/>
              <Button name = "switchmode" onClickNightMode = {onClickNightMode}/>
            </div>
            <Route path="/signedin/home" exact>
              <ExpenseList loggedIn = {loggedIn} isstyle = {isstyle}/>
            </Route>
            <Route path="/signedin/addexpense">
              <AddExpense loggedIn = {loggedIn} addExpenseToList = {addExpenseToList} />
            </Route>
          </div>
      </Route>}
    </div>
    
  );
}

export default App;
