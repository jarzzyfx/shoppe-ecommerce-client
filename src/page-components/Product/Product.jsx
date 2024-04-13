import { Link, useParams } from "react-router-dom";
import { demoProductData } from "../../demoData/demoProductData";
// import Star from "../../ui-components/Star/Star";
import Favourite from "../../ui-components/Favourite/Favourite";
import Button from "../../ui-components/Button/Button";
import LinkSlider from "../../ui-components/LinkSlider/LinkSlider";
import ProductCard from "../../ui-components/ProductCard/ProductCard";
import "./Product.css";
import { FaStar } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Product = () => {
  const param = useParams().productId;
  const [skuNumber, setSkuNumber] = useState(1)


  // window size emitter
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

 

  document.querySelector("title").textContent = `Prodsuct - ${param}`;
  const [product] = demoProductData.filter((p) => p.productId === param);
  const productLinks = [
    {
      text: 'Description',
      // url: '/description' ,
      url: `#`
    },
    {
      text: 'Additional Information',
      // url: '/additional-info' ,
      url: `#`

    },
    {
      text: 'Reviews',
      // url: `${product.reviews.reviewsLink}`,
      url: '#'
    },
  ]
  const IncreamntSku = () => {
    setSkuNumber(skuNumber+1)
    skuNumber >= product.sku && setSkuNumber(product.sku)
    let newSku = sku - 1
    setSku(newSku)
    sku <= 1 && setSku(0)
   
  }
  const DecreaseSku = () => {
    setSkuNumber(skuNumber - 1)
    skuNumber <= 1 && setSkuNumber(1)
    let newSku = sku + 1
    setSku(newSku)
    newSku >= product.sku && setSku(product.sku) 
   }
   const [sku, setSku] = useState(product.sku)
 
  return (
    <div className="product">
      <section className="top-area">
        {/* img section */}
        <div className="img_section">
          {
            windowDimension.winWidth > 600 && (
              <div className="img_previews">
            <Link className="img_link" to={"#"}>
              <img src={product.demoPictures.img1} alt={product.productTitle} />
            </Link>

            <Link className="img_link" to={"#"}>
              <img src={product.demoPictures.img2} alt={product.productTitle} />
            </Link>
            <Link className="img_link" to={"#"}>
              <img src={product.demoPictures.img3} alt={product.productTitle} />
            </Link>
            <Link className="img_link" to={"#"}>
              <img src={product.demoPictures.img4} alt={product.productTitle} />
            </Link>
          </div>
            )
          }
          <div className="img_showcase">
            <img src={product.productImg} alt={product.productTitle} />
            <div className="showcase_tracker">
              <span></span>
            </div>
          </div>
        </div>
        {/* description section */}
        <div className="details_section">
          <header>
            <h2>{product.productTitle}</h2>
            <h3>${product.productPrice}</h3>
          </header>

          <main>
            <p className="rating">
              <span>
                {
                  // render out star elements for the number of ratings
                  Array.from({ length: product.reviews.rating }, (v, i) => (
                    <FaStar style={{ fill: "#A18A68" }} key={i} />
                  ))
                }
              </span>

              <span>{product.reviews.numberOfReviews} Customer Reviews</span>
            </p>
            <article>{product.productDescription}</article>
            <div className="actions">
              <span>
                <Button funcClick={()=> DecreaseSku()} btnType={"ghost"}>-</Button> {skuNumber}{" "}
                <Button funcClick={()=> IncreamntSku()} btnType={"ghost"}>+</Button>{" "}
              </span>
              <Button
                headClassName={"product_btn"}
                btnType={"ghostBlack"}
                setWidth={"full"}
              >
                ADD TO CART
              </Button>
            </div>
            <aside>
              <div className="social_links">
                <Favourite className={"product_fav"} /> |
                <Button className={"social_btn"} btnType={"ghost"}>
                  <MdOutlineEmail />
                </Button>
                <Button className={"social_btn"} btnType={"ghost"}>
                  <FaFacebookF />
                </Button>
                <Button className={"social_btn"} btnType={"ghost"}>
                  <FaInstagram />
                </Button>
                <Button className={"social_btn"} btnType={"ghost"}>
                  <FaXTwitter />
                </Button>
              </div>
              <div className="unitInfo">
                <span>SKU: {sku}</span>
                <span className="categories">
                  categories:{" "}
                  {product.categories.map((c) => (
                    <p key={c}>{c},</p>
                  ))}
                </span>
              </div>
            </aside>
          </main>
        </div>
      </section>
      <section className="bottom-area">
       <aside>
       <LinkSlider links={productLinks} slider={true}/>
       <div className="view_container">
        content
       </div>
       </aside>

<div className="similarItems">
  {
    product.similarProducts.forEach(p =>{
      p === product.productId ?   (<h2 key={product.productId}>{product.productTitle}</h2>) : null
    })
  }
</div>

      </section>
    </div>
  );
};

export default Product;
