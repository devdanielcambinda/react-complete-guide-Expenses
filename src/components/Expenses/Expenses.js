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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterYear={filterYearHandler}
        />
        { expenses.map( expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)}
      </Card>
    </div>
  );
};
export default Expenses;
