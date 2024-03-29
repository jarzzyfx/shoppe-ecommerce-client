// active 
// inactive

import { useState } from "react"
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import './Fave.css'

const Favourite = ({className}) => {

    const [click, setClick] = useState(false)

    const toggleClick = () =>{
        click ? setClick(false) : setClick(true)
    }

    
    

return  (
    <button className={`heart ${className && className}`} onClick={toggleClick}>
          {
             !click ? (<CiHeart />)  : (<FaHeart className="gold" />)
          }     
    </button>
)
}

export default Favourite