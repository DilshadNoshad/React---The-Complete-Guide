import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> found no expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expenseItems) => {
        return (
          <ExpenseItem
            key={expenseItems.id}
            title={expenseItems.title}
            amount={expenseItems.amount}
            date={expenseItems.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
