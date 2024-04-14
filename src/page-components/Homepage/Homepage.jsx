import './Homepage.css'
import Button from '../../ui-components/Button/Button'
import ProductCard from '../../ui-components/ProductCard/ProductCard'
import { IoIosRadioButtonOff } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { demoProductData } from '../../demoData/demoProductData';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom's


const Homepage =() => {

//   const navigate = useNavigate();

// const linkTo = (link) => {
//     navigate(link)
// }

const [index, setIndex] = useState(0)


const slideBtnStyles = {
  padding: "0px 10px",
  cursor: "pointer",
  transition: ".2s ease"
}

const imagesArray = [
  {
    key: "_1",
    imgUrl: "/images/heroImg.png",
    imgTitle : "Gold Big Hoops",
    imgTitlePrice: "68,000",
    imgBtnText: "View Products"
  },
  {
    key: "_2",
    imgUrl: "/images/womanFace-front.png",
    imgTitle : "High Gold Earings",
    imgTitlePrice: "20,000",
    imgBtnText: "Get one now"
  },
  {
    key: "_3",
    imgUrl: "/images/womanFace-side.png",
    imgTitle : "Diamonds Ear Gangs",
    imgTitlePrice: "50,00",
    imgBtnText: "Access Limitted Stock"
  },
  {
    key: "_4",
    imgUrl: "/images/heroImg.png",
    imgTitle : "Gold Big Hoops",
    imgTitlePrice: "72,000",
    imgBtnText: "View Products"
  },
  {
    key: "_5",
    imgUrl: "/images/ear1.png",
    imgTitle : "Gold metal Drops",
    imgTitlePrice: "68,000",
    imgBtnText: "View Products"
  },
]

const slide = (index) => {
  setIndex(index)
}

// const slider = (index) => {
//   setInterval(() => {
//     setIndex(imagesArray.length +1)
//     if(index >= imagesArray.length ) { 
//       setIndex(imagesArray.length -1)
//     }
//   }, 1000);
// }

// slider(index)
  const data =  demoProductData

  document.querySelector('title').textContent = 'Shoppe - Home'

  return (
    <main className='homePage'>
      <div style={{backgroundImage: `url(${imagesArray[index].imgUrl})`}} className="img-container">
        {/* <img src="/images/heroImg.png" alt="Hero Image" /> */}

      <div className="hero-section">
        <h1>{imagesArray[index].imgTitle}</h1>
        <h2>${imagesArray[index].imgTitlePrice}</h2>
        <Button className={'hero-btn'} btnType={'ghostWhite'} setBorder={'smooth'}>{imagesArray[index].imgBtnText}</Button>
        </div>
        <div className="hero-controls">
          {
            imagesArray.map((item, itemIndex) => {
              return (
                <div style={slideBtnStyles} key={itemIndex} onClick={()=> slide(itemIndex)}>

                  {
                    index === itemIndex ? (<IoIosRadioButtonOff className='white expand'/>) : (<FaCircle className='white'/>)
                  }
                </div>
              )
            })
          }

        </div>
      </div>

<section className="product-showcase">
  <header>
    <h1>Shop The Latest</h1> <Button btnLink={'/shop'} btnType={'ghost'} className={'gold'}>View All</Button>
  </header>
  <main>
    {
      data && data.map(el => {
        return <ProductCard key={el.productId} productImg={el.productImg} productLink={`shop/${el.productId}`} productTitle={el.productTitle} productPrice={el.productPrice}/>
      })
    }
  </main>
</section>
    </main>
  )
}

export default Homepage