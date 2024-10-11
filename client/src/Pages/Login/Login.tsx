import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/Login.css';
import auth from '../../utils/auth'

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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login form data:', formData);
      auth.login('')
      // You can now send formData to an API for authentication
    }
  };

  return (
    <div className="main">
    <div className="login-container">
      <h2>Login</h2>
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

        <button type="submit" className=".signin-btn">Sign In</button>
        <p className="new-user">New User? <Link to="./Components/Sign-Up">Create an Account</Link></p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;