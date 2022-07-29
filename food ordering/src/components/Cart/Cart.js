import React, { useContext, useState, Fragment } from "react";

import Checkout from "./Checkout";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const [isChecout, setIsChecout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setdidSubmit] = useState(false);
  const cartCxt = useContext(CartContext);

  const hasItems = cartCxt.items.length > 0;
  const TotalAmount = `$${cartCxt.totalAmount.toFixed(2)}`;

  const cartItemAddHanlder = (item) => {
    cartCxt.additem(item);
  };
  const cartItemRemoveHanlder = (id) => {
    cartCxt.removeitem(id);
  };

  const orderSubmitHandler = async (userData) => {
    setIsSubmitting(true);

    await fetch(
      "https://react-http-8a166-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderItems: cartCxt.items }),
      }
    );
    setIsSubmitting(false);
    setdidSubmit(true);
    cartCxt.clearCart();
  };

  const orderHandler = () => {
    setIsChecout(true);
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button onClick={orderHandler} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCxt.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartItemAddHanlder.bind(null, item)}
          onRemove={cartItemRemoveHanlder.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const modalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{TotalAmount}</span>
      </div>
      {isChecout && (
        <Checkout onCancel={props.onHideCart} onConfirm={orderSubmitHandler} />
      )}
      {!isChecout && modalActions}
    </Fragment>
  );

  const isSubmittingModal = <p>Sending Order Please wait...</p>;
  const didSubmitModal = (
    <Fragment>
      <p>Success! sent the order</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </Fragment>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {!isSubmitting && !didSubmit && modalContent}
      {isSubmitting && isSubmittingModal}
      {!isSubmitting && didSubmit && didSubmitModal}
    </Modal>
  );
};

export default Cart;
