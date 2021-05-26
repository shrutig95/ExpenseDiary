import "./ExpenseItem.css";
import deleteIcon from "./delete.png";


const ExpenseItem = (props) => {
  
 const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
 
  return (
    //Outer card area
    <div className="items">
      {/* <div className="items__Date"> {props.date} </div> */}
       <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
      </div>
        <h2 className="items__Title"> {props.title}</h2>
      <div className="items__Amount"> {props.amount} </div>
      <img src={deleteIcon} onClick={props.click} className="delete_button" alt="Delete"></img>
      
   </div>
     
    
  );
};


    
export default ExpenseItem;
