import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth_context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "email_Input") {
    return { value: action.val, emailValid: action.val.includes("@") };
  }
  if (action.type === "input_blur") {
    return { value: state.value, emailValid: state.value.includes("@") };
  }
  return { value: "", emailValid: false };
};
const passwordReducer = (state, action) => {
  if (action.type === "password_Input") {
    return { value: action.val, passwordValid: action.val.trim().length > 6 };
  }
  if (action.type === "input_blur") {
    return { value: state.value, passwordValid: state.value.trim().length > 6 };
  }
  return { value: "", passwordValid: false };
};
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    emailValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    passwordValid: null,
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const authCxt = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  // useEffect(() => {
  //   const setTimer = setTimeout(() => {
  //     console.log("useEffect running");
  //   }, 500);
  //   return () => {
  //     clearTimeout(setTimer);
  //     console.log("useEffect cleaned up function");
  //   };
  // }, [emailState, passwordState]);

  // not a values assignment alias assignment
  const { emailValid: emailIsValid } = emailState;
  const { passwordValid: passwordIsValid } = passwordState;
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("validity check!!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("cleanup");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: "email_Input", val: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes("@") && passwordState.value.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "password_Input", val: event.target.value });
    // setEnteredPassword(event.target.value);
    // setFormIsValid(
    //   emailState.value.includes("@") && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "input_blur" });
    // setEmailIsValid(emailState.emailValid);
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "input_blur" });
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCxt.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-mail"
          type="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailIsValid}
          ref={emailInputRef}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordIsValid}
          ref={passwordInputRef}
        />
        {/* <div
          className={`${classes.control} ${
            emailState.emailValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div> */}
        {/* <div
          className={`${classes.control} ${
            passwordState.passwordValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
