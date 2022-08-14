import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";
// import { createStore } from "redux";

// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggle(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initialAuthState = { isAuthenticated: false };

// const authSlice = createSlice({
//   name: "Auth",
//   initialState: initialAuthState,
//   reducers: {
//     isLogin(state) {
//       state.isAuthenticated = true;
//     },
//     isLogout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

// const reducerFunction = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});
// const store = createStore(reducerFunction);

export default store;
