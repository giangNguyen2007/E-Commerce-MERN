import { useContext } from 'react';
import { baseRequest } from '../axios';
import { CartContext } from '../context.js/CartContext';
import useChangeCart from './useChangeCart';


// utility function to fetch single product from backend
const fetchSingleProduct = async (productId) => {
    try {
        const res = await baseRequest.get(`product/${productId}`)
        debugger;
        return res.data
    } catch (error) {
        throw Error(error)
    }
}

// utility function to send cart to backend
const saveCart = async (user, products) => {
    try {
        const response = await baseRequest.post(`/cart/${user._id}`, { userId : user._id, products}, {
            headers: {
                token: 'Bearer ' + user.accessToken
            }
        })
        
    } catch (error) {
        throw Error(error)
    }
}

// utility function to load cart from backend, triggered after login
const fetchUserCart = async (user) => {
 
    try {
        const userCart = await baseRequest.get(`/cart/find/${user._id}`, {
            headers: {
                token: 'Bearer ' + user.accessToken
            }
        })

        if (userCart.data.length > 0) {
            return userCart.data[0];
        } else {
            return null
        }
        
    } catch (error) {
        throw Error(error)
    }
}


export {fetchSingleProduct, saveCart, fetchUserCart}