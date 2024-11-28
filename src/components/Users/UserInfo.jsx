import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function UserList() {
 return(

     <><h1 style={{ textAlign: 'center' }}>Welcome to Digital Library</h1>

     <Container
         style={{
             display: 'inline-block',
             justifyContent: 'space-between',
             alignItems: 'center',
             marginBottom: '1rem', // Add some margin for spacing
         }}
     ></Container></>
 )
}

export default UserList;