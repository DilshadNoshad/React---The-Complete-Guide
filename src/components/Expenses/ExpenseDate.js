import React from "react";
import "./ExpenseDate.css";

const ExpenceDate = (props) => {
  const day = props.itemDate.toLocaleString("en-US", { day: "2-digit" });
  const month = props.itemDate.toLocaleString("en-US", { month: "long" });
  const year = props.itemDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenceDate;
