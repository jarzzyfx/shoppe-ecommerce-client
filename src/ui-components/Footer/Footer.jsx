
import { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'
import InputField from '../InputField/InputField'
import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaLongArrowAltRight, FaTwitter } from 'react-icons/fa'

const Footer = () => {

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

  return (
    <footer>
        <section className='top'>
            <div className="info">
                <Button btnLink={'/contact'} btnType={'ghost'} className={'fr-text'}>CONTACT</Button>
                <Button btnLink={'/privacy-policy'} btnType={'ghost'} className={'fr-text'}>TERMS OF SERVICE</Button>
                <Button btnLink={'/shipping-returns'} btnType={'ghost'} className={'fr-text'}>SHIPPING AND RETURNS</Button>
            </div>

            {
                windowDimension.winWidth <= 500 ? 
                (
                    <>
                    <Checkbox text={"i agree to the websit's terms and conditions"}/>
                    <InputField className={'footer-field'} fieldType={'email'} inpType={'field'} inpStyle={'line'} holder={'Give an email, get the news letter'} icon={<FaLongArrowAltRight/>}/>
                    </>
                ) :
                (
                    <InputField className={'footer-field'} fieldType={'email'} inpType={'field'} inpStyle={'line'} holder={'Give an email, get the news letter'} icon={<FaLongArrowAltRight/>}/>
                )
            }
        </section>

        <section className='bottom'>
            <p> 2024 Shelly. Terms of use <span>and</span> Privacy policy</p>

            {
                windowDimension.winWidth <= 500 ? (
                    <>
                   <div className="social-icons">
                   Follow us-
                <Button btnType={'ghost'} className={'fr-text'} ><FaLinkedin/></Button>
                <Button btnType={'ghost'} className={'fr-text'}><FaFacebook/></Button>
                <Button btnType={'ghost'} className={'fr-text'} btnLink={'https://www.instagram.com/just__emeka'}><FaInstagram/></Button>
                <Button btnType={'ghost'} className={'fr-text'}><FaTwitter/></Button>
            </div>  </>
                ) : 
                (
                    <>
                    <div className="social-icons">
                <Button btnType={'ghost'} className={'fr-text'} ><FaLinkedin/></Button>
                <Button btnType={'ghost'} className={'fr-text'}><FaFacebook/></Button>
                <Button btnType={'ghost'} className={'fr-text'} btnLink={'https://www.instagram.com/just__emeka'}><FaInstagram/></Button>
                <Button btnType={'ghost'} className={'fr-text'}><FaTwitter/></Button>
            </div> </>
                )
            }
        </section>
        
    </footer>
  )
}

export default Footer