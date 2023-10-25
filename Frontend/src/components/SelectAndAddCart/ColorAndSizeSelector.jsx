import React from 'react'
import Selector from '../Selector/Selector'


const ColorAndSizeSelector = ({colorArray, sizeArray, setSelectColor, setSelectSize}) => {
    
    const colorCircleStyle = {
        background:'white',
        width:'10px',
        height:'10px',
        border: '0.5px solid grey'
    }

    return (
    <div>
        <div className="color-palette" >        
            <span >Color</span>
            {colorArray? colorArray.map(
                (color) => (<div className="color-cercle" style={{...colorCircleStyle, background:color}}> </div> )
            ) : null}
        </div>

        <div className="select-wrapper">
            <span >Select</span>
            <Selector title='color' dataArray={colorArray} handleChange={setSelectColor}/>
            <Selector title='size' dataArray={sizeArray} handleChange={setSelectSize} />
        </div>
    </div>
  )
}

export default ColorAndSizeSelector