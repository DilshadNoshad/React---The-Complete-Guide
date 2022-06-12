import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [expenseFilterYear, setExpenseFilterYear] = useState("2020");

  const filterExpenses = (expenseByYear) => {
    setExpenseFilterYear(expenseByYear);
  };

  const filteredExpenses = props.expenses.filter((expenses) => {
    return expenses.date.getFullYear().toString() === expenseFilterYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={expenseFilterYear}
        onChangeDropdown={filterExpenses}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
