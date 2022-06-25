import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import ContextProvider from "./store/ContextProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };
  const hideCartHandler = () => {
    setCartIsShow(false);
  };
  return (
    <ContextProvider>
      {cartIsShow && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </ContextProvider>
  );
}

export default App;
