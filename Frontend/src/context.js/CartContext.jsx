import { createContext, useState, useReducer } from "react";

export const CartContext = createContext()

// single cartItem : {
    // product: {
          // key : string (= _id + color + size)
          // _id: string,
          // title: String,
          // desc: String,
          // color : String,
          // categories String[],
          // price: Number,
    // }
    // quantity: Number
// }

function CartReducer(state, action){
    switch(action.type) {
      case "SET_CART":
        return {
            cartItems: action.payload,
            cartTotal : state.cartItems.reduce(
              (total, cartItem) => total + cartItem.product.price*cartItem.quantity,
              0   // initial value
            )
        }
      case "RESET_NULL":
        return {
            cartItems: [],
            cartTotal: 0
        }
      case "ADD_ONE":
        return {
            cartItems: [...state.cartItems, action.payload]
        }
      
      case "UPDATE_ONE":
        return {
            ...state,
            cartItems: state.cartItems.map( 
               cartItem => cartItem.product.key === action.payload.product.key ? action.payload : cartItem
            )
        }
      
      case "UPDATE_TOTAL_PRICE":
        return {
            ...state,
            cartTotal: state.cartItems.reduce(
              (total, cartItem) => total + cartItem.product.price*cartItem.quantity, 0 )
        }
      
      case "REMOVE_ONE":
        return {
            ...state,
            cartItems: state.cartItems.filter( 
                cartItem => cartItem.product.key !== action.payload.key
            )
        }

      default:
        return state
    }
  }

export default function CartContextProvider ({children}) {

    const [state, dispatchCart] = useReducer(CartReducer, {cartItems: [], cartTotal: 0})

    return (  
        <CartContext.Provider value={{ ...state, dispatchCart}}>
            {children}
        </CartContext.Provider>
    )
}