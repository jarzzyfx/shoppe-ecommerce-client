import { useParams } from "react-router-dom"
// import dataGrid from "../../demoData/tableData";


const Product = () => {

    const param = useParams().productId;
    
    document.querySelector('title').textContent = `Product - ${param}`

       

  return (
    <div>this is product for {
      
      } </div>
  )
}

export default Product