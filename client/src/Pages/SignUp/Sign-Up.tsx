import React, { useState } from 'react';
import '../../assets/stylesheets/SignUp.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth'
import {login} from '../../API/authAPI';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Error state
  const [errors, setErrors] = useState<string[]>([]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form validation function
  const validateForm = (): boolean => {
    const validationErrors: string[] = [];

    if (!formData.name) validationErrors.push('Name is required.');
    if (!formData.email.includes('@')) validationErrors.push('Invalid email format.');
    if (formData.password.length < 6) validationErrors.push('Password must be at least 6 characters.');
    if (formData.password !== formData.confirmPassword) validationErrors.push('Passwords do not match.');

    setErrors(validationErrors);
    return validationErrors.length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) 
      try{
      const data = await login(formData);
      Auth.login(data.token) 
      console.log('Form submitted successfully:', formData);
      // You could now send the formData to an API for signup
      
    }catch (err){
    console.error('Error from user login: ', err);
   
  }
};


  return (
    <div className="main">
    <div className="signup-container">
      <h2>Sign Up</h2>
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
        <div className="signup-form">
        <div className="input-field">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
          <div className="input-field">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
          <div className="input-field">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
          <div className="input-field">
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        </div>

        <button type="submit" className="signup-btn">Sign Up</button>
        <p className="existing-user">Already have an account? <Link to="/login">Sign In</Link></p>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
