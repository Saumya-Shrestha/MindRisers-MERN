import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
// import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

function App() {
  const [mode, setMode] = useState("dark");
  const [text, setText] = useState(<i class="fa-solid fa-sun"></i>);
  // const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode == "dark") {
      setMode("light");
      setText(<i class="fa-solid fa-moon"></i>);
      // showAlert("Light Mode Has Been Enabled", "success");
    } else {
      setMode("dark");
      setText(<i class="fa-solid fa-sun"></i>);
      // showAlert("Dark Mode Has Been Enabled", "success");
    }
  };

  // const showAlert = (message, type) => {
  //   setAlert({
  //     message: message,
  //     type: type,
  //   });
  // };

  // setTimeout(() => {
  //   setAlert(null);
  // }, 2000);

  let title = "Hamro Hotel";
  const notify = () => toast("Login Successful");

  return (
    <>
      <Router>
        <Navbar
          title={title}
          mode={mode}
          text={text}
          toggleMode={toggleMode}
          notify={notify}
        />
        <ToastContainer />
        {/* <Alert alert={alert} /> */}
        <Routes>
          <Route
            path="/"
            element={<Home mode={mode} />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/blog"
            element={<Blog mode={mode} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
