
import React, { useContext, useState } from 'react';
import { CartContext } from '../context.js/CartContext';
import { AuthContext } from '../context.js/AuthContext';
import { saveCart, fetchUserCart, fetchSingleProduct } from './cartAPI';


const useChangeCart = () => {

    const {cartItems, dispatchCart} = useContext(CartContext);
    const {user } = useContext(AuthContext);

    const addItemToCart = ( product, quantity, selectColor, selectSize) => { 

        // debugger;

        const selectProduct = {
            ...product,
            key : product._id + '&' + selectColor + '&' + selectSize,
            color: selectColor,
            size: selectSize
        }

        // check if product already in cart
        const index = cartItems.findIndex( item => item.product.key === selectProduct.key);

        if (index > -1) {
            // if product already in cart => update quantity
            dispatchCart({
                type: 'UPDATE_ONE',
                payload: {
                    product: selectProduct,
                    quantity: quantity + cartItems[index].quantity
                }
            });

            dispatchCart({type: 'UPDATE_TOTAL_PRICE'})

        } else {
            // if product not already in cart => add to cart
            dispatchCart({
                type: 'ADD_ONE',
                payload: {
                    product: selectProduct,
                    quantity: quantity,
                }
            });

            dispatchCart({type: 'UPDATE_TOTAL_PRICE'})

        }
        
    }

    const removeItemFromCart = ( key) => { 

        // check if product already in cart
        const index = cartItems.findIndex( item => item.product.key === key);

        if (index > -1) {
            dispatchCart({
                type: 'REMOVE_ONE',
                payload: {
                    key
                }
            });

            dispatchCart({type: 'UPDATE_TOTAL_PRICE'})

        } 

    }

    const loadUserCart = async ( userResponse) => { 

        try {
            const userCart = await fetchUserCart(userResponse);
            debugger;
            if (userCart) {
                for (const item of userCart.products){
                    const product = await fetchSingleProduct(item.productId)
                    addItemToCart(product, item.quantity, item.color, item.size);
                } 
            }
         
        } catch (error) {
            throw Error(error)
        }
     
    }

  return {addItemToCart, removeItemFromCart, loadUserCart}
}

export default useChangeCart