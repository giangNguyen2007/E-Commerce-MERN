import React, { useEffect, useState } from 'react'
import './ProductsList.css';
import { popularProducts } from '../../../data'
import ProductItem from './ProductCard'
import axios from 'axios'
import { adminRequest } from '../../../axios'

const Products = ({cat, colorFilter, sizeFilter}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);


    useEffect(() => {
        const getProducts = async () => { 
            try {
                const res = await adminRequest.get(`product?category=${cat}`)
                console.log(res.data)
                setProducts(res.data)
            } catch (error) {
                console.log(error)    
            }
        }

        getProducts(); 
    
    }, [cat])

    useEffect(() => {

        let filtered = products;

        if ( products.length > 0){
            
            if (colorFilter) {
                filtered = filtered.filter(
                    (product) => product.color.includes(colorFilter) 
                )
            } else if (sizeFilter) {
                filtered = filtered.filter(
                    (product) => product.size.includes(sizeFilter)
                )
            } 
        }

        setFilteredProducts(filtered) ; 
     
    }, [products, colorFilter, sizeFilter])

    console.log(filteredProducts);
    
  return (
    <div className="products-container">
        {filteredProducts.map(
            product => (<ProductItem product={product} key={product._id} />)
        )}
    </div>
    )
}

export default Products