import './Product-Cart.css'
import React from 'react'
import useChangeCart from '../../../custom-hook/useChangeCart'
import { DeleteForeverOutlined, DeleteOutlined } from '@material-ui/icons';

const ProductCart = ({product, quantity}) => {

  const {addItemToCart, removeItemFromCart} = useChangeCart();

  const handlePlus = (e) => { 
    addItemToCart(product, 1, product.color, product.size);
  }

  const handleMinus = (e) => { 
    if (quantity > 1) {
      addItemToCart(product, -1, product.color, product.size); 
    }
  }

  const handleDelete = (e) => { 
      removeItemFromCart(product.key);
  }

  return (
    <div className="com-product-cart">
        <img
            src={product.img} 
        />
        <div className="detail-wrapper">
            <div> <b>Product: </b> {product.title}</div>
            <div> <b>ID: </b> {product._id}</div>
            <div> <b>Color: </b> {product.color}</div>
            <div> <b>Size: </b> {product.size}</div>
        </div>
        <div className="price-wrapper">
           <div className="quantity-wrapper">
              <div className='plus-minus' onClick={ handlePlus}> + </div>
              <div className='product-quantity'> {quantity} </div>
              <div className='plus-minus' onClick={ handleMinus}> - </div>
           </div>

            <div className='price'>€ {product.price * quantity}</div>

            <div className="delete-wrapper">
            <div className="delete"
                 onClick={handleDelete}>
                <DeleteOutlined />
              </div>
            </div>
        </div>

      

    </div>
  )
}

export default ProductCart