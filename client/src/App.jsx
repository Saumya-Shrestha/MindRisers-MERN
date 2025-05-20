import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState("dark");
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  let title = "Hamro Bazzar";

  return (
    <>
      <Navbar
        title={title}
        mode={mode}
        setMode={setMode}
      />
      <Banner />
      <div className="container">
        <h1 className="title">Chaitra Group</h1>
        <div className="card">
          <button onClick={handleIncrement}>Click Me To Increase</button>
          <button onClick={handleDecrement}>Click Me to Decrease</button>
        </div>
        <div>
          <h4>Counter: {count}</h4>
          <h5>Title: {title}</h5>
        </div>
      </div>
    </>
  );
}

export default App;
