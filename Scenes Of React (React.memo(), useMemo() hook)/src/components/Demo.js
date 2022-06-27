import React, { useMemo } from "react";
// import MyPara from "./MyPara";

const Demo = (props) => {
  console.log("demo runing");
  const { listItems } = props;
  const sortListitems = useMemo(() => {
    console.log("items sort");
    return listItems.sort((a, b) => a - b);
  }, [listItems]);
  return (
    // <MyPara> {props.show ? "this is para" : ""}</MyPara>;
    <div>
      <h5>{props.titleData}</h5>
      <ul>
        {sortListitems.map((items, i) => (
          <li key={i}>{items}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Demo);
