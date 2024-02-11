import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Created :)");
    return () => {
      console.log("Destroyed :0");
    };
  }, []);
  return <h1>Heello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "HIDE" : "SHOW"}</button>
    </div>
  );
}

export default App;
