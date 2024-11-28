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
      const response = await fetch('http://localhost:8080/user/verifyOtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
        console.log(response.ok)
      if (response.ok) {
        alert('OTP verified');
        navigate('/userInfo');
      } else {
        alert('Invalid OTP');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2>VERIFY OTP</h2>
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
            placeholder="OTP"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '400px' }}
          />
        </div>
        <button type="submit">Submit OTP</button>
      </form>
    </div>
  );
}

export default UpdateInstructorProfile;
