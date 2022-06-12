import React, { useState } from "react";
import ExpensesForm from "./ExpensesForm";
import "./NewExpenses.css";
const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const addExpense = (newExpense) => {
    const addExpenses = {
      ...newExpense,
      id: Math.random(),
    };
    props.onAddExpenses(addExpenses);
  };
  const startEditing = () => {
    setIsEditing(true);
  };
  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && (
        <ExpensesForm onSaveExpense={addExpense} onCancle={stopEditing} />
      )}
    </div>
  );
};

export default NewExpenses;
