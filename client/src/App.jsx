import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import ProductState from './context/ProductState';
import { UserProvider } from './context/UserContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FruitList from './components/FruitList';
import FruitDetail from './components/FruitDetail';

function App() {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');
  const [text, setText] = useState(
    localStorage.getItem('theme') === 'dark' ? <i className='fa-solid fa-sun'></i> : <i className='fa-solid fa-moon'></i>
  );

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setText(<i className='fa-solid fa-moon'></i>);
      localStorage.setItem('theme', 'light');
    } else {
      setMode('dark');
      setText(<i className='fa-solid fa-sun'></i>);
      localStorage.setItem('theme', 'dark');
    }
  };

  let title = 'HAMRO HOTEL';
  // const notify = (isLogin) => toast(isLogin ? 'Login Successful' : 'Logout Successful');

  return (
    <>
      <ProductState>
        <UserProvider>
          <Navbar
            title={title}
            mode={mode}
            text={text}
            toggleMode={toggleMode}
            // notify={notify}
          />
          {/* <ToastContainer
            hideProgressBar={false}
            theme={mode}
          /> */}

          <Routes>
            <Route
              path='/'
              element={<Home mode={mode} />}
            />
            <Route
              path='/about'
              element={<About mode={mode} />}
            />
            <Route
              path='/blog'
              element={<Blog mode={mode} />}
            />
            <Route
              path='/contact'
              element={<Contact mode={mode} />}
            />
            <Route
              path='/userlist'
              element={<UserList />}
            />
            <Route
              path='userlist/:id/:username/:age'
              element={<UserDetail />}
            />
            <Route
              path='/fruitlist'
              element={<FruitList />}
            />
            <Route
              path='fruitlist/:id/:title/:description/:price/:instock'
              element={<FruitDetail />}
            />
            <Route
              path='/login'
              element={<Login mode={mode} />}
            />
            <Route
              path='/signup'
              element={<Signup mode={mode} />}
            />
          </Routes>

          <Footer mode={mode} />
        </UserProvider>
      </ProductState>
    </>
  );
}

export default App;
