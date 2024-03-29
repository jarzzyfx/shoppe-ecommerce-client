
import { demoProductData } from "../../demoData/demoProductData"

import ProductCard from "../../ui-components/ProductCard/ProductCard"
import Search from "../../ui-components/Search/Search"
import Filter from "../../ui-components/Filter/Filter"
import Radio from "../../ui-components/Radio/Radio"
import './Shop.css'
import InputField from "../../ui-components/InputField/InputField"


const Shop = () => {
    const data = demoProductData
    document.querySelector('title').textContent = 'Shoppe - Shop'

  

  return (
    <div  className='shop'>
        <h1 id="#shop">Shope The Latest</h1>
      <main className="shop-container">
        <section>
        <Search exposed={true}/>
        <InputField className={'shop-field'} inpType={'select'} selectOption={[{text: 'Shop By', key:0},{text: 'Gold Pieces', key:1},{text: 'Diamond Pieces', key:2}, ]}/>
        <InputField className={'shop-field'} inpType={'select'} selectOption={[{text: 'Sort By', key:0},{text: 'Ascending Order', key:1},{text: 'Descending Order', key:2}, ]}/>
        <Filter MAX={180} MIN={10}/>
        <div> <span>On Scale</span> <Radio defaultText={'Shoppe - Shop'} activeText={'Shoppe - Shop - Scale Filter'}/></div>
        <div> <span>In Stock</span><Radio defaultText={'Shoppe - Shop'} activeText={'Shoppe - Shop - Stock Filter'}/></div>
      </section>
      <section className="products">
      {
        data.map((item) => (
          <ProductCard className={'product-shop'} key={item.productId} productImg={item.productImg} productLink={item.productId} productPrice={item.productPrice} productTitle={item.productTitle}/>
        ))
        }
      </section>
      </main>
      </div>
  )
}

export default Shop