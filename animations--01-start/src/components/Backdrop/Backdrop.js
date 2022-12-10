import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
  const backDropcss = [
    "Backdrop",
    props.show ? "showbackdrop" : "hidebackdrop",
  ];
  return <div className={backDropcss.join(" ")}></div>;
};

export default backdrop;
