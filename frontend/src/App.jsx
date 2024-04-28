import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

import './App.css';
import { Home, Login, Signup } from './components/index';
import { IsUserRedirect, ProtectedRoute } from './Routes/Routes';
import { useLocalContext } from './context/context';

function App() {
  const { loggedInMail } = useLocalContext();
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <IsUserRedirect user={loggedInMail} loggedInPath='/' path='/login' exact>
    //         <Navigate to='/' replace />
    //     </IsUserRedirect>
    //     <ProtectedRoute user={loggedInMail} path='/' exact>
    //       <Home />
    //     </ProtectedRoute>
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={<Home/>}        
        />
        <Route 
          path="/login"
          element={<Login/>}        
        />
        <Route 
          path="/signup"
          element={<Signup/>}        
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
