import React from 'react';
import b1 from '../assets/blog/blog-1.jpg';
import { Link } from 'react-router-dom';
import SmallBanner from '../components/SmallBanner';
import '../App.css';

const Login = ({ mode }) => {
  return (
    <>
      <SmallBanner
        title='Login'
        mode={mode}
      />
      <div className={`container-flex d-flex justify-content-center align-items-center login-container bg-${mode}`}>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className={`fs-2 fw-bold text-center pb-4 ${mode === 'dark' ? 'text-light' : 'text-dark'}`}>Login to Your Account</h2>
          </div>
          <div className='col-md-6'>
            <div className='card border-0'>
              <img
                className='card-img'
                loading='lazy'
                src={b1}
                alt='Login Image'
              />
            </div>
          </div>
          <div className='col-md-6 d-flex align-items-center'>
            <form className={`w-100 ${mode === 'dark' ? 'text-light' : 'text-dark'}`}>
              <div className='form-outline mb-4'>
                <label className={`form-label ${mode === 'dark' ? 'text-light' : ''}`}>Email</label>
                <input
                  type='email'
                  id='loginName'
                  className={`form-control ${mode === 'dark' ? 'dark-mode-input' : ''}`}
                />
              </div>

              <div className='form-outline mb-4'>
                <label className={mode === 'dark' ? 'text-light' : ''}>Password</label>
                <input
                  type='password'
                  id='loginPassword'
                  className={`form-control ${mode === 'dark' ? 'dark-mode-input' : ''}`}
                />
              </div>

              <div className='row mb-4'>
                <div className='col-md-6 d-flex justify-content-center small'>
                  <div className='form-check mb-3'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='loginCheck'
                    />
                    <label className={`form-check-label ${mode === 'dark' ? 'text-light' : ''}`}>Remember me</label>
                  </div>
                </div>

                <div className='col-md-6 d-flex justify-content-center small'>
                  <a
                    href='#!'
                    className={mode === 'light' ? 'light-accent-text' : 'dark-accent-text'}
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className='d-flex justify-content-center'>
                <button
                  type='submit'
                  className={`btn btn-dark ${mode === 'light' ? 'light-accent-button' : 'dark-accent-button'} px-4 py-2 mb-4`}
                >
                  Sign in
                </button>
              </div>

              <div className='text-center'>
                <p>
                  Not a member?
                  <Link
                    to='/signup'
                    className={`${mode === 'light' ? 'light-accent-text' : 'dark-accent-text'} px-1`}
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
