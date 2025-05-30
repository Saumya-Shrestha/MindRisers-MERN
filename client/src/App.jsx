import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState(<i className="fa-solid fa-sun"></i>);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setMode(savedMode);
      setText(savedMode === "dark" ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setText(<i className="fa-solid fa-moon"></i>);
    } else {
      setMode("dark");
      setText(<i className="fa-solid fa-sun"></i>);
    }
  };

  let title = "HAMRO HOTEL";
  const notify = (isLogin) => toast(isLogin ? "Login Successful" : "Logout Successful");

  return (
    <>
      <Navbar
        title={title}
        mode={mode}
        text={text}
        toggleMode={toggleMode}
        notify={notify}
      />
      <ToastContainer
        hideProgressBar={false}
        theme={mode}
      />

      <Routes>
        <Route
          path="/"
          element={<Home mode={mode} />}
        />
        <Route
          path="/about"
          element={<About mode={mode} />}
        />
        <Route
          path="/blog"
          element={<Blog mode={mode} />}
        />
        <Route
          path="/contact"
          element={<Contact mode={mode} />}
        />
      </Routes>

      <Footer mode={mode} />
    </>
  );
}

export default App;
