import React, { useState} from "react";
import "./NewExpense.css";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewExpense(props) {
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');


    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };
    
    const onAddNewExpenseSubmit= (event) => {
        event.preventDefault();
        if (enteredTitle !== "" && enteredAmount !== "" && enteredDate !== "") {
            const expenseData = {
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate)
                //date:Moment(enteredDate).format('DD MMM YYYY')
            };
            props.onAddExpenseData(expenseData);
        } else {
            toast.info("Kindly enter the values.");
        }
        setTitle("");
        setAmount("");
        setDate("");
    };
    return (
        <form onSubmit={onAddNewExpenseSubmit}>
            <div className="new-expense">
                <h3>Add new expense: </h3>
                <div className="container">
                        <div className="entered_data entered_Title">
                            <p>Title:</p>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                        <div className="entered_data entered_Amount">
                            <p>Amount:</p>
                            <input type="number" value={enteredAmount } min="0.01" step="0.01" onChange={ amountChangeHandler}/>
                    </div>
                        <div className="entered_data entered_date">
                            <p>Date:</p>
                            <input type="date" value={enteredDate} min="2018-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                            </div>
                    </div>
                <button type="submit">Add</button>
            </div>
            
        </form>
    );
}

export default NewExpense;