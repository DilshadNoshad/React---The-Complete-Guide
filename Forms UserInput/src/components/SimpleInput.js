import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// import React from "react";
// import useUserinput from "../hooks/user-input";

// const SimpleInput = (props) => {
//   const {
//     value: enteredName,
//     hasError: nameInputHasError,
//     isValid: enteredNameIsValid,
//     inputChangeHandler: nameInputChangeHandler,
//     inputBlurHandler: nameInputBlurHandler,
//     reset: resetNameInput,
//   } = useUserinput((value) => value.trim() !== "");
//   const {
//     value: enteredEmail,
//     hasError: emailInputHasError,
//     isValid: enteredEmailIsValid,
//     inputChangeHandler: emailInputChangeHandler,
//     inputBlurHandler: emailInputBlurHandler,
//     reset: resetEmailInput,
//   } = useUserinput((value) => value.includes("@"));
//   // const [enteredName, setEnteredName] = useState("");
//   // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

//   // const [enteredEmail, setEnteredEmail] = useState("");
//   // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

//   // const enteredNameIsValid = enteredName.trim() !== "";
//   // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

//   // const enteredEmailIsValid = enteredEmail.includes("@");
//   // const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

//   let formIsValid = false;

//   if (enteredNameIsValid && enteredEmailIsValid) {
//     formIsValid = true;
//   }

//   // const nameInputChangeHandler = (event) => {
//   //   setEnteredName(event.target.value);
//   // };

//   // const emailInputChangeHandler = (event) => {
//   //   setEnteredEmail(event.target.value);
//   // };

//   // const nameInputBlurHandler = (event) => {
//   //   setEnteredNameTouched(true);
//   // };

//   // const emailInputBlurHandler = (event) => {
//   //   setEnteredEmailTouched(true);
//   // };

//   const formSubmissionHandler = (event) => {
//     event.preventDefault();

//     // setEnteredNameTouched(true);

//     if (!enteredNameIsValid) {
//       return;
//     }

//     console.log(enteredName, enteredEmail);

//     // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
//     // setEnteredName("");
//     // setEnteredNameTouched(false);
//     resetNameInput();
//     resetEmailInput();
//     // setEnteredEmail("");
//     // setEnteredEmailTouched(false);
//   };

//   const nameInputClasses = nameInputHasError
//     ? "form-control invalid"
//     : "form-control";

//   const emailInputClasses = emailInputHasError
//     ? "form-control invalid"
//     : "form-control";

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           type="text"
//           id="name"
//           onChange={nameInputChangeHandler}
//           onBlur={nameInputBlurHandler}
//           value={enteredName}
//         />
//         {nameInputHasError && (
//           <p className="error-text">Name must not be empty.</p>
//         )}
//       </div>
//       <div className={emailInputClasses}>
//         <label htmlFor="email">Your E-Mail</label>
//         <input
//           type="email"
//           id="email"
//           onChange={emailInputChangeHandler}
//           onBlur={emailInputBlurHandler}
//           value={enteredEmail}
//         />
//         {emailInputHasError && (
//           <p className="error-text">Please enter a valid email.</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;
