import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Transition from "react-transition-group/cjs/Transition";

class App extends Component {
  state = { modalIsOpen: false, showBlock: false };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {/* <Transition
          in={this.state.modalIsOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
        > */}
        {/* {(state) =>  */}
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {/* } */}
        {/* </Transition> */}
        {this.state.modalIsOpen ? <Backdrop show /> : null}
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => {
            console.log("Enter");
          }}
          onEntering={() => {
            console.log("Entering");
          }}
          onEntered={() => {
            console.log("Entered");
          }}
          onExit={() => {
            console.log("Exit");
          }}
          onExiting={() => {
            console.log("Exiting");
          }}
          onExited={() => {
            console.log("Exited");
          }}
        >
          {(state) => (
            <div
              style={{
                margin: "0 auto",
                backgroundColor: "red",
                height: 100,
                width: 100,
                transition: "opacity 1s ease-in-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            ></div>
          )}
        </Transition>
        <button className="Button" onClick={this.openModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
