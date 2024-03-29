// full
// half
import {FaStar, FaStarHalfAlt } from "react-icons/fa";
import {AiOutlineStar } from "react-icons/ai";
import './Star.css'

const Star = ({stars, reviews}) => {

 const ratingStar=  Array.from({length:5}, (el, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {
          stars >= index + 1 ? (<FaStar className="icon"/>) :  stars >= number ? (<FaStarHalfAlt className="icon"/>) : (<AiOutlineStar className="icon"/>)
        }
      </span>
    )

  })
  return (
    <>
      {ratingStar}
      <a href={reviews.link}>{reviews.text} customer review</a>
    </>
  )
}

export default Star