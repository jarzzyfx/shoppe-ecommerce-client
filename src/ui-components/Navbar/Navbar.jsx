import { Link } from 'react-router-dom'
import LinkSlider from '../LinkSlider/LinkSlider'
import Search from '../Search/Search'
import './Navbar.css'
import { navBarLinks } from '../../../navBarLinks'
import { CiUser } from "react-icons/ci";
import Cart from '../Cart/Cart'
import Button from '../Button/Button'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from 'react'
import { VscCollapseAll } from 'react-icons/vsc'

const Navbar = () => {
    const navLinks = navBarLinks

    const [menuopen, setMenuopen] = useState(false)

    const toggleMenu = () => {
       !menuopen ? setMenuopen(true) : setMenuopen(false)
    }

  return (
    <nav>
        <section className="logo">
            <Link to="/">
                <img src="/shopelogo.svg" alt="" />
            </Link>
        </section>

        <section className="nav_links">
        <LinkSlider slider={true} links={navLinks} className={'separate'}/>
        <div className="action-buttons">
            <Button className={'nav-btn'} btnType={'ghost'}><Search exposed={false}/> <span>Search for Products</span> </Button>
            <Button className={'nav-btn'} btnLink={'/auth/login'} btnType={'ghost'}><CiUser /> <span>Access Your Account</span></Button>
           <Cart/>
            
        </div>
        </section>
        <Button funcClick={toggleMenu} headClassName="handbugger" btnType={'ghost'}>
        {
            !menuopen ? (<HiOutlineMenuAlt3 />) : (<VscCollapseAll/>)
        }
        </Button>
    </nav>
  )
}

export default Navbar