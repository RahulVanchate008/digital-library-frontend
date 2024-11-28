import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserList() {
    const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    // Initialize with user information
    email: ''
    // Add other user properties as needed
  });

  useEffect(() => {
    // Create a query string with user information
   
    // Make a GET request to the API with the query string
    fetch(`http://localhost:8080/admin/getAllUsers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the list of courses from the API
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [user]);


  const handleAcceptUser = async (acceptedUserId) => {
    
    try {
      // Send the registration data to your server for processing
      const response = await fetch('http://localhost:8080/admin/approveUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: acceptedUserId,
      });
      console.log(JSON.stringify(acceptedUserId))

      if (response.ok) {
        // Registration successful
        alert('User Approved');
        navigate('/usersTable');
      } else {
        // Registration failed
        alert('Approval failed, Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>USERS</h1>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem', // Add some margin for spacing
        }}
      >
  
      </Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>EMAIL</TableCell>
              <TableCell>AGE</TableCell>
              <TableCell>PHONE NUMBER</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.email}>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
                <TableCell>{user.status}</TableCell>    
                <TableCell>
                {user.status === "PENDING" && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAcceptUser(user.email)}
                  >
                    APPROVE
                  </Button>
                )}
                  </TableCell>            
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserList;