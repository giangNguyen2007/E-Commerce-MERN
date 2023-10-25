
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context.js/AuthContext';
import { baseRequest } from '../axios';
import {useNavigate} from 'react-router-dom';
import useChangeCart from './useChangeCart';


const useAuth = (user) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatchAuth} = useContext(AuthContext);
    const {loadUserCart} = useChangeCart();
    const navigate = useNavigate();
    // const {loadUserCart} = useChangeCart()


    const authenticateUser = async (user, action) => { 
        setIsLoading(true);
        setError(null);

        // action = "register" / "login"

        try {
            const response = await baseRequest.post(`/auth/${action}`, user) ;

            // if no error
            setIsLoading(false) ;
            localStorage.setItem('user', JSON.stringify(response.data));
            debugger;

            dispatchAuth( { type: 'LOG_IN', payload: response.data }) ;

            loadUserCart(response.data);
            navigate('/');

            console.log(response.data);
            return response.data
         
        } catch (error) {
            setError(error.response.data.error);
            setIsLoading(false);
            throw Error(error);
        }

     }

  return {authenticate: authenticateUser, isLoading, error}
}

export default useAuth