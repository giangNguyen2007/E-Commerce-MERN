import './Slider.css';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div className="slider">
        {/* <div className="arrow-cont" id="left-arrow">
            <ArrowLeftOutlined />
        </div>

        <div className="arrow-cont" id="right-arrow">
            <ArrowRightOutlined />
        </div> */}

        <div className="slide-wrapper">
            <div className="slide">
                <div className="img-container">
                    <img src="https://img.fruugo.com/product/6/07/545506076_max.jpg" />
                </div>
                
                <div className="info-container">
                    <div className='section-title'>AUTUMN SALE</div>
                    
                    <p>Nike Mercurial Superfly 8 Elite FG </p>

                    <Link to={`/product/653234852c518659d50aac4c`}>
                        <button>SHOP NOW</button>
                    </Link>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Slider