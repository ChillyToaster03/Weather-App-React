import React from 'react'
import './Themetoggle.css'

const Themetoggle = (props) => {
  return (
    <div>
      <label className="switch" >
            <input 
            type="checkbox" 
            onChange={props.func} 
            checked={props.isDark}/>
            <span className="slider"></span>
        </label>
    </div>
  )
}

export default Themetoggle
