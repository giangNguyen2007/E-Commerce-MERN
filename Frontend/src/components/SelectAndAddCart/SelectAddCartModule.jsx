import './SelectAddCartModule.css'
import React from 'react'
import { useState} from 'react'
import useChangeCart from '../../custom-hook/useChangeCart'
import Selector from '../Selector/Selector'
import useQuantity from '../../custom-hook/useQuantity'
import ColorAndSizeSelector from './ColorAndSizeSelector'

const SelectAddCart = ({product}) => {

    const [selectColor, setSelectColor] = useState(null);
    const [selectSize, setSelectSize] = useState(null);
    const {quantity, setQuantity, handleQuantity} = useQuantity();
    const {addItemToCart} = useChangeCart();


    const handleAddCart = (e) => { 
        // add to cart the product with specified color and size
        addItemToCart(product, quantity, selectColor, selectSize);
        setQuantity(1);
    }

  return (

    <div className='select-add-cart-wrapper'>
        <ColorAndSizeSelector
            colorArray={product.color}
            sizeArray={product.size}
            setSelectColor = {setSelectColor}
            setSelectSize = {setSelectSize}
        />

        <div className='add-cart-container' >

            <div className="amount-cont">
                <div className="plus-minus" onClick={(e) => handleQuantity('Plus')}>+</div>
                <div className="product-quantity" > {quantity} </div>
                <div className="plus-minus"  onClick={(e) => handleQuantity('Minus')}>-</div>
            </div>

            <button 
                    onClick={handleAddCart}
                    className="add-cart-btn" 
                    disabled = {!selectColor || !selectSize}>
                Add to Cart
            </button>
        </div>
    </div>
    
  )
}

export default SelectAddCart