import React, { useState } from 'react';
import '../../styles/FormStyle.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function UpdateInstructorProfile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the registration data to your server for processing
      const response = await fetch('http://localhost:8080/user/updateProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Password Reset Successful!');
        navigate('/login');
      } else {
        alert('Failed to reset password');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2>RESET PASSWORD</h2>
        <div className="form-group">
          <TextField required='true'
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '400px' }}
          />
        </div>
        <div className="form-group">
          <TextField required='true'
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '400px' }}
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default UpdateInstructorProfile;
