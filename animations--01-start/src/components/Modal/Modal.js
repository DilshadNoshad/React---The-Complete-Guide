import React from "react";
import { CSSTransition } from "react-transition-group";
import Transition from "react-transition-group/cjs/Transition";
import "./Modal.css";
const animationTimming = {
  enter: 400,
  exit: 1000,
};
const modal = (props) => {
  return (
    // <Transition
    //   in={props.show}
    //   timeout={animationTimming}
    //   mountOnEnter
    //   unmountOnExit
    // >
    //   {(state) => {
    //     const modalCss = [
    //       "Modal",
    //       state === "entering"
    //         ? "showmodal"
    //         : state === "exiting"
    //         ? "hidemodal"
    //         : null,
    //     ];
    //     return (
    //       <div className={modalCss.join(" ")}>
    //         <h1>A Modal</h1>
    //         <button className="Button" onClick={props.closed}>
    //           Dismiss
    //         </button>
    //       </div>
    //     );
    //   }}
    // </Transition>
    <CSSTransition
      in={props.show}
      timeout={animationTimming}
      mountOnEnter
      unmountOnExit
      // basic css trunks automatic
      // classNames="fade-slide" // fade-slide-enter => fade-slide-enter-active means entering => remove => fade-slide-exit => fade-slide-exit-active

      //custom own css class with classnames

      classNames={{
        enter: "",
        enterActive: "showmodal",
        exit: "",
        exitActive: "hidemodal",
      }}
      // appear: "",
      // appearActive: "",
      // }
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
