import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css';
import CartContextProvider from './context.js/CartContext.jsx';
import AuthContextProvider from './context.js/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthContextProvider>
      <CartContextProvider>

        <App /> 

      </CartContextProvider>
    </AuthContextProvider>
    
  </React.StrictMode>,
)
