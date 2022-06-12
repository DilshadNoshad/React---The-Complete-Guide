import React from "react";
import Card from "../UI/Card";
import ExpenceDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // let [title, setTitle] = useState(props.title);
  // let title = props.title;

  // const clickHandler = () => {
  //   setTitle("updated!!");
  //   console.log(title);
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenceDate itemDate={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
