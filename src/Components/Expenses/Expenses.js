import React, { useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../FilterExpenses/ExpenseFilter";

//let expenses = <h4>Your expenses will be displayed here.</h4>;
const Expenses = (props) => {
  
  const [year, changeYear] = useState('2021');
  const [month, changeMonth] = useState('All');
  const [currExpense, addExpense] = useState("");

  const filterYearChangeHandler = selectedYear => {
    changeYear(selectedYear);     
  };
  const filterMonthChangeHandler = selectedMonth => {
    changeMonth(selectedMonth);     
  };
  const onCalculateHandler = expense => {
    addExpense(expense);
  };
  // if (props.resetCalExp == true) {
  //   addExpense("0");
  // }
   
  return (
    <div className="back-area">
      <ExpensesFilter expenseData={props.expenseData} calExpense={ currExpense} onCalculate={ onCalculateHandler} selectedM={month} selectedY={year} filterYearChangeHandler={filterYearChangeHandler} filterMonthChangeHandler={filterMonthChangeHandler }  />
      {props.expenseData.length === 0?<h4>Your expenses will be displayed here.</h4>:
        props.expenseData.map((expense,index) =>
          <ExpenseItem
            click={()=>props.onDeleteExpense(index)}
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )}
      {/* {expenses} */}
     
    </div>
  );
};

export default Expenses;
