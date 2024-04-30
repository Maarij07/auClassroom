import { Auth0Provider } from "@auth0/auth0-react"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { ContextProvider } from './context/context.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AuthContextProvider>
      <ContextProvider>
        <Auth0Provider
          domain="dev-rgnko5v8r6tp8007.us.auth0.com"
          clientId="6oHHgXXD8yRtbdBn41T7HRCySlBjoRc3"
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </ContextProvider>
    </AuthContextProvider>
  </Provider>
)

