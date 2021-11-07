import { React, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  
  const expenses = props.items;

  const [filterYear, setFilterYear] = useState("2021");
  
  const filterYearHandler = (year) => {
    setFilterYear(year);
        console.log(year);
  };

 const filteredExpenses = expenses.filter( expense =>  expense.date.getFullYear() == filterYear)

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterYear={filterYearHandler}
        />
        { filteredExpenses.map( expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
      </Card>
    </div>
  );
};
export default Expenses;
