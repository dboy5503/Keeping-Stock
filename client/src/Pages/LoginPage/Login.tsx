import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/Login.css';
import Auth from '../../utils/auth'
import {login} from '../../API/authAPI';


interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  // State to hold form data
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  // State to manage errors
  const [errors, setErrors] = useState<string[]>([]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form validation
  const validateForm = (): boolean => {
    const validationErrors: string[] = [];

    if (!formData.email.includes('@')) validationErrors.push('Please enter a valid email.');
    if (formData.password.length < 6) validationErrors.push('Password must be at least 6 characters long.');

    setErrors(validationErrors);
    return validationErrors.length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) 
      try{
    const data = await login(formData); // this will be the response from the API when the user logs in
    
    // If login is successful, call Auth.login to store the token in localStorage
    Auth.login(data.token) 
    console.log('Login successful:', data);

    // Redirect the user to the home page after successful login
    window.location.assign('/');
      }catch (err){
        console.log('Error from user login: ', err);
    }
  };

  /* css files were fixed 10/13 */
  return (
    <div className="main">
    <div className="login-container">
      <h2 className="login-container h2">Login</h2>
      {errors.length > 0 && (
        <div className="error-messages">
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="login-form">
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        </div>

        <button type="submit" className="signin-btn">Sign In</button>
        <p className="new-user">New User? <Link to="/Sign-Up">Create an Account</Link></p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;