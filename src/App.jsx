import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import { Home, Login } from './components/index';
import { IsUserRedirect, ProtectedRoute } from './Routes/Routes';
import { useLocalContext } from './context/context';

function App() {
  const { loggedInMail } = useLocalContext();
  return (
    <BrowserRouter>
      <Routes>
        <IsUserRedirect user={loggedInMail} loggedInPath='/' path='/login' exact>
          <Login />
        </IsUserRedirect>
        <ProtectedRoute user={loggedInMail} path='/' exact>
          <Home />
        </ProtectedRoute>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
