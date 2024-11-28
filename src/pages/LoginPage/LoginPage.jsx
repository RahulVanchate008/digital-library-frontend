// src/components/LoginPage.js

import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/user/login', formData, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const role = response.data;
      if (response.status === 200) {
        // Successful login
        localStorage.setItem('role', role);
        console.log(response.data);

        if (role === "ADMIN")
        {
          navigate('/usersTable');
        } 
        if (response.data == "Failed") {
          alert("User login not approved by Admin, please contact Admin for more info");
        }
        else {
          navigate('/verifyOtp');
        };
      } else {
        // Failed login
        console.log(role);
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      alert('Login failed. Please check your credentials.');
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="login-page">
      <div className="image-container">
      <div className="search-bar" style={{backgroundColor:'silver', marginTop:50, borderRadius:8}}>
        <TextField
        label="Search"
        variant="standard"
        InputProps={{
        startAdornment: (
        <SearchIcon color="primary" /> // Add the SearchIcon to the search bar
      ),
    }}
    style={{ color: 'white', width:'500px', backgroundColor:''}} // Set the text color to white
  />
</div>

        {/* <img height={800} width={500} src="https://img.lovepik.com/element/45007/0204.png_860.png" alt="Login Image" /> */}
        {/* <img height={800} width={500} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVn4cZDb5fYmcA2i2uRNzUyheFScIiPmmNKSP6V7cpYAPXCLbUVHwBouJT_Pp7fsFiKw&usqp=CAU" alt="Login Image" /> */}
      </div>
      <div className="login-box"style={{width:'500px'}}>
        <form onSubmit={handleSubmit} style={{ width:'500px' }}>
          <h2>LOGIN</h2>
          <TextField
          
          required = {true} 
          type="email"
          name="email"
          id="outlined-required"
          label="Email"
          defaultValue=""
          value={formData.username}
            onChange={handleInputChange}
            style={{ width: '300px' }}
        />
        <br/>
        <br/>
          <TextField
          required
          type="password"
          name="password"
          id="outlined-required"
          label="Password"
          defaultValue=""
          value={formData.password}
            onChange={handleInputChange}
            style={{ width: '300px' }}
        />
      <br/>
        <br/>
          <Button onClick={handleSubmit} type="submit" variant="contained" color="primary" style={{ width: '300px' }}>
        Login
      </Button >
        </form>
        <br/>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'white' }}>New User?</p>  
          <a style={{ color: 'blue' }} href="/register">Register here!</a>
          <p></p>  
          <a style={{ color: 'blue' }} href="/resetPassword">Forgot Password?</a>
        </div>
        
      </div>
    </div>
  );
}

export default LoginPage;
