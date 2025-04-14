import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logoPng from '../../Assets/logo.svg';
import './Login.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineRemoveRedEye, MdOutlineVisibilityOff } from 'react-icons/md';
import { FaChevronRight } from 'react-icons/fa';

function Login({ setToken }) {
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      navigate('/');
    }
  }, [navigate, setToken]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState('');

  const body = {
    username: username,
    password: password,
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://185.180.230.50:8010/api/v1/auth/login/', body);
      const newToken = response.data.access;
      const refreshToken = response.data.refresh;
      const userId = response.data.user_id;
      console.log(response);
      
      setToken(newToken);
      localStorage.setItem('token', newToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('userId', userId);

      navigate('/');
    } catch (err) {
      setError('Invalid username or password');
      console.log(err);
      
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="LoginContainer">
      <div className="login-container">
        <div className="login-logo">
          <img src={logoPng} alt="Success Academy" />
        </div>
        <div className="login-form">
          <h1>Welcome!</h1>
          <form onSubmit={handleSignIn}>
            <div className="Username">
              <p>Username</p>
              <label className="input-group1">
                <input
                  type="text"
                  placeholder="Input Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <FaRegUserCircle />
              </label>
            </div>
            <div className="Password">
              <div>
                <p>Password</p>
                <a href="/">Forgot Password?</a>
              </div>
              <label className="input-group1">
                <input
                  type={passwordShown ? 'text' : 'password'}
                  placeholder="Input Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordShown ? (
                  <MdOutlineVisibilityOff
                    onClick={togglePasswordVisibility}
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                  <MdOutlineRemoveRedEye
                    onClick={togglePasswordVisibility}
                    style={{ cursor: 'pointer' }}
                  />
                )}
              </label>
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="btn-sign-in">
              Confirm
            </button>
            <div className="signup-link">
              <a href="#signup">
                Sign up <FaChevronRight />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
