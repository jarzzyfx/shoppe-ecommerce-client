import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react'
import './Filter.css';

// import {useState} from 'react'

// const MIN=100;
// const MAX=12000

const Filter = ({MIN, MAX}) => {



    
const [value, setValue] = useState([MIN,MAX])
const handleSlider =() => {
    document.querySelector('title').textContent = 'Shoppe - Shop ~ Filter'
}
const handleComplete =() => {
    document.querySelector('title').textContent = 'Shoppe - Shop'
}

    return (
        <div className='filter'>
              <Slider 
  range
  className='t-slider'
  min={MIN}
  max={MAX}
  value={value}
  onChange={setValue}  
  onFocus={handleSlider}
  onChangeComplete={handleComplete}
  />
            <div className="slider-info">
                <h4>Price:<span className="values">${value[0]} - ${value[1]}</span></h4>
                <h3>Filter</h3>
            </div>
        </div>
    );
}

export default Filter;
