import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { BsEyeSlash } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import { useState } from 'react';

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form className='login-body'>
        <div className='email-container'>
          <label htmlFor='email'>Email</label>
          <input type='email' required id='email' placeholder='Email Address' />
        </div>

        <div className='password-container'>
          <label htmlFor='password'>Password</label>
          <div className='input-container'>
            <input
              type={hidePassword ? 'password' : 'text'}
              id='password'
              placeholder='Password'
            />{' '}
            {!hidePassword ? (
              <BsEye
                className='hide-show-password-eye'
                onClick={() => setHidePassword(!hidePassword)}
              />
            ) : (
              <BsEyeSlash
                className='hide-show-password-eye'
                onClick={() => setHidePassword(!hidePassword)}
              />
            )}
          </div>
        </div>

        <div className='remember-me-container'>
          <div>
            <input type='checkbox' name='remember-me' />
            <label htmlFor='remember-me'>Keep me signed in</label>
          </div>

          <p>Forgot your Password?</p>
        </div>

        <div className='login-btn-container'>
          <input type='submit' />
          <button>Login with Test Credentials</button>
        </div>

        <Link className='new-account'>Create a new account?</Link>
      </form>
    </div>
  );
};

export default Login;
