import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux/es/exports";
import { cartAction } from "../../Store/cart-slice";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const addItemQuantityHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        id,
        title,
        total,
        price,
      })
    );
  };
  const removeItemQuantityHandler = () => {
    dispatch(cartAction.removeItemFromCart(id));
  };
  // const deleteItemQuantityHandler = () => {
  //   dispatch(cartAction.deleteItemFromCart(id));
  // };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          {/* <button onClick={deleteItemQuantityHandler}>delete</button> */}
          <button onClick={removeItemQuantityHandler}>-</button>
          <button onClick={addItemQuantityHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
