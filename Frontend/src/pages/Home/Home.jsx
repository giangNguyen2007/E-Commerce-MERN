import React from 'react'
import Slider from './HomePageComponents/Slider'
import CategoryList from './HomePageComponents/CategoryList'
import Products from '../CategoryPage/CategoryPageComponents/ProductsList'
import Newsletter from './HomePageComponents/Newsletter'

const Home = () => {
  return (
    <div className='home'>
        <Slider />
        <CategoryList />
        <Products />
        <Newsletter />
    </div>
  )
}

export default Home