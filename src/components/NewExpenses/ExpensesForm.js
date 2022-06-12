import React, { useState } from "react";
import "./ExpensesForm.css";
const ExpensesForm = (props) => {
  //   const [userInput, setUserInput] = useState({
  //     title: "make yourself better",
  //     amount: "1234",
  //     date: "before your die",
  //   });

  // valid but some aspect errors in increment

  // setUserInput({
  //   ...userInput,
  //   loop: event.target.value,
  // });

  // best way to do for only one state
  // setUserInput((userInput) => {
  //   return {
  //     ...userInput,
  //     loop: event.target.value,
  //   };
  // });

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setdate] = useState("");

  const titleInputHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountInputHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateInputHandler = (event) => {
    setdate(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();

    const addExpense = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveExpense(addExpense);
    setTitle("");
    setAmount("");
    setdate("");
  };

  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleInputHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            value={date}
            onChange={dateInputHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancle}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpensesForm;
