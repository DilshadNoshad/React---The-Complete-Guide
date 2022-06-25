import React from "react";
import classes from "./Header.module.css";
import headerImg from "../../../assets/bgmealtoheel.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>MealToHeel</h1>

        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={headerImg} alt="bgmeal" />
      </div>
    </React.Fragment>
  );
};

export default Header;
