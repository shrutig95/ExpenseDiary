import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const onYearFilterChangeHandler = (event) => {
        props.filterYearChangeHandler(event.target.value);
  };
  const onMonthFilterChangeHandler = (event) => {
        props.filterMonthChangeHandler(event.target.value);
  };
  let totalExpense = 0;
  const onCalculateHandler = event => {
    event.preventDefault();
    const selectedMonth = event.currentTarget.monthId.value;
    const selectedYear = event.currentTarget.yearId.value;
    // let totalExpense = currExpense.toString();
    if (props.expenseData.length > 0) {
      props.expenseData.forEach(expense => {
        const year = expense.date.getFullYear().toString();
        const month = expense.date.toLocaleString('en-US', { month: 'long' });
      
        if (selectedMonth === month && selectedYear === year) {
          totalExpense = parseFloat(totalExpense) + parseFloat(expense.amount);
        } else if (selectedMonth === "All" && selectedYear === year) {
          totalExpense = parseFloat(totalExpense) + parseFloat(expense.amount);
        }
      });
    }
    // if (props.calExpense == 0) {
    //   toast.info("Add expenes!");
    // }
    
    console.log("Total Expense: " +totalExpense);
    props.onCalculate(totalExpense);
  };
  const years = ["2018", "2019", "2020", "2021", "2022"];
  const months = ["All","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <form className='expenses-filter' onSubmit={onCalculateHandler}>
      <p>Calculate total expense for:</p>
      <div className='expenses-filter__control'>
        <label>Month</label>
              <select id="monthId" value={ props.selectedM} onChange={ onMonthFilterChangeHandler}>
          {months.map((month) =>
            <option value={month}>{month}</option>
           )}
        </select>
        <label>Year</label>
        <select id="yearId" value={ props.selectedY} onChange={ onYearFilterChangeHandler}>
          {years.map((year) =>
            <option value={year}>{year}</option>
           )}
        </select>
        <button className="expense_button">Calculate</button>
         <label>Total Expense:</label>
        <div className="expense-value">{ (props.calExpense==="")? 0:props.calExpense}</div>
      </div>
    </form>
  );
};

export default ExpensesFilter;