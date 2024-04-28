import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './context/context.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ContextProvider>
      <App />
    </ContextProvider>,
  </AuthContextProvider>
)
