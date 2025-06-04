import React, { useState } from 'react';
import b1 from '../assets/blog/blog-1.jpg';
import { Link } from 'react-router-dom';
import '../App.css';
import SmallBanner from '../components/SmallBanner';

const Signup = ({ mode }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <>
      <SmallBanner
        title='Sign Up'
        mode={mode}
      />
      <div className={`container-flex d-flex justify-content-center align-items-center login-container bg-${mode}`}>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className={`fs-2 fw-bold text-center pb-4 ${mode === 'dark' ? 'text-light' : 'text-dark'}`}>Create an Account</h2>
          </div>
          <div className='col-md-6'>
            <div className='card border-0'>
              <img
                className='card-img'
                loading='lazy'
                src={b1}
                alt='Signup Image'
              />
            </div>
          </div>
          <div className='col-md-6 d-flex align-items-center'>
            <form className={`w-100 ${mode === 'dark' ? 'text-light' : 'text-dark'}`}>
              <div className='form-outline mb-4'>
                <label className={`${mode === 'dark' ? 'text-light' : ''}`}>Email</label>
                <input
                  type='email'
                  id='registerEmail'
                  className={`form-control ${mode === 'dark' ? 'dark-mode-input' : ''}`}
                />
              </div>

              <div className='form-outline mb-4'>
                <label className={`${mode === 'dark' ? 'text-light' : ''}`}>Password</label>
                <div className='input-group'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id='registerPassword'
                    className={`form-control ${mode === 'dark' ? 'dark-mode-input' : ''}`}
                  />
                  <span
                    className='input-group-text'
                    style={{ cursor: 'pointer' }}
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <i className='bi bi-eye-slash'></i> : <i className='bi bi-eye'></i>}
                  </span>
                </div>
              </div>

              <div className='form-outline mb-4'>
                <label className={`${mode === 'dark' ? 'text-light' : ''}`}>Confirm password</label>
                <div className='input-group'>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id='registerRepeatPassword'
                    className={`form-control ${mode === 'dark' ? 'dark-mode-input' : ''}`}
                  />
                  <span
                    className='input-group-text'
                    style={{ cursor: 'pointer' }}
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? <i className='bi bi-eye-slash'></i> : <i className='bi bi-eye'></i>}
                  </span>
                </div>
              </div>

              <div className='d-flex justify-content-center'>
                <button
                  type='submit'
                  className={`btn btn-dark ${mode === 'light' ? 'light-accent-button' : 'dark-accent-button'} px-4 py-2 mb-4`}
                >
                  Sign up
                </button>
              </div>

              <div className='text-center'>
                <p>
                  Already a member?
                  <Link
                    to='/login'
                    className={`${mode === 'light' ? 'light-accent-text' : 'dark-accent-text'} px-1`}
                  >
                    Login
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

export default Signup;
