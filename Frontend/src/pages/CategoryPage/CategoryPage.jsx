import './CategoryPage.css'
import React, { useState } from 'react'
import Products from './CategoryPageComponents/ProductsList'
import { useLocation } from 'react-router-dom'
import Selector from '../../components/Selector/Selector'
import { categoriesData } from '../../data'

const CategoryPage = () => {
    const location = useLocation();
    const title = location.pathname.split("/")[2];
    const [colorFilter, setColorFilter] = useState("")
    const [sizeFilter, setSizeFilter] = useState("")

    const {colorArray, sizeArray, cat} = categoriesData.find( item => item.title === title)

    const handleSizeSelect = (value) => { 
        if (value === 'all') {
            setSizeFilter("");
        } else {
            setSizeFilter(value);
        }
     }

    const handleColorSelect = (value) => { 
        if (value === 'all') {
            setColorFilter("");
        } else {
            setColorFilter(value);
        }
     }
  
  return (
    <div className='prod-category-wrapper'>
        <h1 class='text-xl font-bold'> Category : {title} </h1>
        <div className = 'filters-wrapper'>

            <div className = 'filters-left-wrapper'>

                <span >Filter by: </span>
                <Selector title="Color" dataArray={colorArray} handleChange={handleColorSelect} />
                <Selector title="Size" dataArray={sizeArray} handleChange={handleSizeSelect} />
                
            </div>
              
        </div>

        <Products cat={cat} colorFilter={colorFilter} sizeFilter={sizeFilter}/>
    </div>
  )
}

export default CategoryPage