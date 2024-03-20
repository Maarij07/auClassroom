import { useState } from 'react';
import './App.css';
import { Sidebar, Home } from './components/index';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
