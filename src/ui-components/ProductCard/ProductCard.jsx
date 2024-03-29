import './ProductCard.css'
import Favourite from '../Favourite/Favourite'
import { IoEyeOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';


const ProductCard = ({productLink, productTitle, productPrice, productImg, className, message}) => {
  return (
      <div className={`p-card ${className}`}>
        <div className="p-card-actions">
          <button><Link className='a' to={productLink}><IoEyeOutline /></Link></button>
          <Favourite />
          <button><CiShoppingCart /></button>

        </div>

        <section className="img-sec">
          { !productImg  ? (<div className="loading">loading...</div>) : (<img src={productImg} alt={productTitle} />)
        }
        {message ? (<small>{message && message}</small>) : ''}
        </section>
        <section className="card-content">
            <h3>{productTitle  && productTitle}</h3>
            <p>${productPrice}</p>
        </section>
      </div>
  )
}

export default ProductCard