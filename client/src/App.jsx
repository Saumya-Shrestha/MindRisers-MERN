import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Alert from "./components/Alert";
import One from "./components/One";

function App() {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState("dark");
  const [text, setText] = useState("Dark Mode");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode == "dark") {
      setMode("light");
      setText("Dark Mode");
      showAlert("Light Mode Has Been Enabled", "success");
    } else {
      setMode("dark");
      setText("Light Mode");
      showAlert("Dark Mode Has Been Enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
  };

  setTimeout(() => {
    setAlert(null);
  }, 2000);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  let title = "Hamro Bazzar";
  const notify = () => toast("Login Successful");

  return (
    <>
      <Navbar
        title={title}
        mode={mode}
        text={text}
        toggleMode={toggleMode}
        notify={notify}
      />
      <ToastContainer />
      <Alert alert={alert} />
      <Banner />
      <One mode={mode} />
      <div className="container">
        <h1 className="title">Chaitra Group</h1>
        <div className="card">
          <button onClick={handleIncrement}>Click Me To Increase</button>
          <button onClick={notify}>Toastify</button>
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
