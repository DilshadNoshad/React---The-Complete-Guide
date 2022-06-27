import React, { useCallback, useMemo, useState } from "react";

import "./App.css";
import Demo from "./components/Demo";
import Button from "./components/UI/Button/Button";

function App() {
  const [title, setTitle] = useState("old list");

  const updateHandler = useCallback(() => {
    setTitle("new list");
  }, []);

  const listItem = useMemo(() => {
    return [10, 3, 77, 98, 100];
  }, []);
  // const [paraIsShow, setParaIsShow] = useState(false);
  // const [allowMagic, setAllowMagic] = useState(false);

  // const btnTogglerHandler = useCallback(() => {
  //   if (allowMagic) {
  //     setParaIsShow((paraIsShow) => !paraIsShow);
  //   }
  // }, [allowMagic]);

  // const allowTogglerHandler = () => {
  //   setAllowMagic(true);
  // };

  console.log("app runing");
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {paraIsShow && <p>This is magic para</p>} */}
      {/* <Demo show={paraIsShow} /> */}
      {/* <Button onClick={allowTogglerHandler}>Allow Magic</Button> */}
      <Demo titleData={title} listItems={listItem} />
      <Button onClick={updateHandler}>update</Button>
      {/* <Button onClick={btnTogglerHandler}>Magic Button</Button> */}
    </div>
  );
}

export default App;
