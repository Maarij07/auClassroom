import { useState } from 'react';
import './App.css';
import {Router, Routes, Route } from 'react-router';
import { Home, Login } from './components/index';
import { IsUserRedirect, ProtectedRoute } from './Routes/Routes';
import { useLocalContext } from './context/context';

function App() {
  const {loggedInMail} =useLocalContext();
  return (
    <Router>
      <Routes>
       <IsUserRedirect user={loggedInMail} loggedInPath='/' path='/login' exact>
          <Login/>
       </IsUserRedirect>
       <ProtectedRoute user={loggedInMail} path='/' exact>
          <Home/>
       </ProtectedRoute>
      </Routes>
    </Router>
  );
}

export default App;
