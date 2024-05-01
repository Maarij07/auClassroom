import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SelectUsers } from './store/userSlice';
import { Home, Login, Signup } from './components/index';
import { useLocalContext } from './context/context';

function App() {
  const user = useSelector(SelectUsers);

  if (user.currentUser) {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
