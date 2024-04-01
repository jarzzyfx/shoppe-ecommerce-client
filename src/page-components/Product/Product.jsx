import { useParams } from "react-router-dom"
import { demoProductData } from "../../demoData/demoProductData";



const Product = () => {

    const param = useParams().productId;
    
    document.querySelector('title').textContent = `Product - ${param}`
    const [product] = demoProductData.filter(p => p.productId === param)

    // console.log(product)
       

  return (
    <div>this is product for 
      <span>{product.productId}</span>
      <img src={product.productImg} alt={product.productTitle} />
      <h3>{product.productTitle}</h3>
      <p>{product.productPrice}</p>
       </div>
  )
}

export default Product