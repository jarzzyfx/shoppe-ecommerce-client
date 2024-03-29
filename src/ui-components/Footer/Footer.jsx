
import Button from '../Button/Button'
import InputField from '../InputField/InputField'
import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaLongArrowAltRight, FaTwitter } from 'react-icons/fa'

const Footer = () => {



  return (
    <footer>
        <section>
            <div className="info">
                <Button btnLink={'/contact'} btnType={'ghost'} className={'fr-text'}>CONTACT</Button>
                <Button btnLink={'/privacy-policy'} btnType={'ghost'} className={'fr-text'}>TERMS OF SERVICE</Button>
                <Button btnLink={'/shipping-returns'} btnType={'ghost'} className={'fr-text'}>SHIPPING AND RETURNS</Button>
            </div>

            <InputField className={'footer-field'} fieldType={'email'} inpType={'field'} inpStyle={'line'} holder={'Give an email, get the news letter'} icon={<FaLongArrowAltRight/>}/>
        </section>

        <section>
            <p> 2024 Shelly. Terms of use <span>and</span> Privacy policy</p>

            <div className="social-icons">
                <Button btnType={'ghost'} className={'fr-text'} ><FaLinkedin/></Button>
                <Button btnType={'ghost'} className={'fr-text'}><FaFacebook/></Button>
                <Button btnType={'ghost'} className={'fr-text'} btnLink={'https://www.instagram.com/just__emeka'}><FaInstagram/></Button>
                <Button btnType={'ghost'} className={'fr-text'}><FaTwitter/></Button>
            </div>
        </section>
        
    </footer>
  )
}

export default Footer