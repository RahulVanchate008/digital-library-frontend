import React, {useState} from 'react';
import './App.css';
import Login from './pages/LoginPage/LoginPage.jsx';
import Register from './pages/RegisterPage/RegisterUser.jsx';
import UpdateProfile from './pages/UserProfile/UpdateProfile.jsx';
import ResetPassword from './pages/UserProfile/ResetPassword.jsx';
import VerifyOtp from './pages/UserProfile/VerifyOtp.jsx';

import Dashboard from './components/MenuBar/Dashboard.jsx';
import UsersTable from './components/Users/UsersTable.jsx';
import UserInfo from './components/Users/UserInfo.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <><Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/verifyOtp" element={<VerifyOtp />} />
      </Routes>
    </Router><Router>
        <Dashboard />
        <Routes>
          <Route path="/updateProfile" element={<UpdateProfile />} />
          <Route path="/usersTable" element={<UsersTable />} />
          <Route path="/userInfo" element={<UserInfo />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router></>

  );
}

export default App;
