import React from "react";

const MyPara = (props) => {
  console.log("mypara runing");
  return <p>{props.children}</p>;
};

export default MyPara;
