import './Register.css'
import {React, useState, useEffect, useContext} from 'react'
import useAuth from '../../custom-hook/useAuth';
import useChangeCart from '../../custom-hook/useChangeCart';
import {useNavigate} from 'react-router-dom';
import { AuthContext } from '../../context.js/AuthContext';

const Login = () => {
   
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {authenticate, error, isLoading} = useAuth();
    const {loadUserCart} = useChangeCart();
    const navigate = useNavigate();

    
    const handleSubmit = async (e)  => { 
      e.preventDefault();

      try {
        // const response = await authenticate({username, email, password}, 'login');
        const response = await authenticate({username:'giang-nguyen3', email:'rairacer@gmail.com',password: '12345'}, 'login');
        // const response = await authenticate({username:'giang-nguyen4', email:'akatsuki@gmail.com',password: '12345'}, 'login');
      
      } catch (e){
        console.log(e)
      }
 
    }
    

  return (
     <div className="login-register-container">
      <form onSubmit={handleSubmit}>
        <div className='section-title'>Login</div>

        <div className='input-container'>

          <label>Username:</label>
          <input 
            type="userName" 
            onChange={(e) => setUsername(e.target.value)} 
            value={username} 
          />
          
          <label>Email :</label>
          <input 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
          />
          <label>Password:</label>
          <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
          />
        </div>

        <button disabled={isLoading}>Login</button>
        {error && <div className="error">{error}</div>}

      </form>

     </div>
  )
}

export default Login