import React from 'react'

const Selector = ( {title, dataArray, handleChange}) => {
  return (
    <select onChange = {e => handleChange(e.target.value)}>

        <option disabled selected style={{width:'15px'}}>{title}</option>
        { dataArray ? dataArray.map( (item) => 
            <option style={{width:'15px'}}>{item}</option>
        ): null}
        
    </select> 
  )
}

export default Selector