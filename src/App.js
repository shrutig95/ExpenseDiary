import React, { useState } from "react";
import "./App.css";
import NewExpense from "./Components/AddNewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
   
const App = () => {
  const [expenses, setExpenses] = useState("");
  //const [resetCalExp ,setCalExp]= useState(false);
  const addExpenseDataHandler = (enteredExpenseData) => {
     const newexpenseItem = {
        ...enteredExpenseData,
       id: Math.random().toString()
     };
    
    setExpenses((prevExpenses) => {
      return [
        newexpenseItem
      , ...prevExpenses];
    });
  };
  
  const deleteExpenseHandler = (index) => {
    console.log("Delete expense :" + index.toString());
    const newexpenses = [...expenses];
    newexpenses.splice(index, 1);
    setExpenses(newexpenses);
    // setCalExp(true);
    toast.success("Successfully deleted expense.");
  };
 
  return (
    // <div style={{ backgroundImage: `url(${Background})` }}>
    <div style={{ height:'100 %'}}>
      <h2 className="App-header"> Welcome to Expense Diary </h2>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expenses expenseData={expenses} onDeleteExpense={deleteExpenseHandler} />

      <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={1500} />
    </div>
  );
}

export default App;
