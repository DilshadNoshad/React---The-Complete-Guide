import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const [btnHighlight, setBtnHighlight] = useState(false);
  const carCtx = useContext(CartContext);

  const { items } = carCtx;

  const numberOfCartItems = items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlight(true);

    const btnTime = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);

    return () => {
      clearTimeout(btnTime);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
