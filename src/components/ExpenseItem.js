import "./ExpenseItem.css"

const ExpenseItem = () => {
  const expenseDate = new Date(2021,2,8)
  const expenseTitle = "Car Insurence"
  const expenseAmount = 294.67;
  return (
    <div className="expense-item">
      <div>{expenseDate.toLocaleString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
