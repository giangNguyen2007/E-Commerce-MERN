import React from 'react';
import './CategoryList.css';
import { categoriesData } from '../../../data';
import {Link } from 'react-router-dom';

const CategoryList = () => {
  return (
    <div className='category-container'>
        {categoriesData.map( (item) => 
            <CategoryCard item={item} />
        )}
    </div>
  )
}

const CategoryCard = ({item}) => {
  return (
    <>
      <Link to={`/list/${item.cat}`}>
        <div className='category-card'>
            <button> {item.title + ' - Collection >'}  </button>
            <div className="image-wrapper">
              <img src= {item.image}/>
            </div>
        </div>
      </Link>
    </>
 
  
  )
}

export default CategoryList