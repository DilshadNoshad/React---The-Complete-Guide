import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { uiActions } from "./Store/ui-slice";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./Store/cart-actions";

let initialState = true;
function App() {
  const isShown = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (initialState) {
      initialState = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  // in component use a asyn code to send a data and dispatch also has alternative way action creators

  // useEffect(() => {
  //   const sendCartData = async () => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "pending",
  //         title: "sending...",
  //         message: "sending cart data!",
  //       })
  //     );
  //     const response = await fetch(
  //       "https://react-http-8a166-default-rtdb.firebaseio.com/cart.json",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(cart),
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("sending cart date failed!");
  //     }
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "success",
  //         title: "success!",
  //         message: "sent cart data successfully!",
  //       })
  //     );
  //   };
  //   if (initialState) {
  //     initialState = false;
  //     return;
  //   }
  //   sendCartData().catch((error) => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "error",
  //         title: "Error!",
  //         message: "sending cart data failed!",
  //       })
  //     );
  //   });
  // }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isShown && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
