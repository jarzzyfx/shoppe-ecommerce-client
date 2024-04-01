import { Link } from "react-router-dom";
import LinkSlider from "../LinkSlider/LinkSlider";
import Search from "../Search/Search";
import "./Navbar.css";
import { LaptopnavBarLinks,PhonenavBarLinks } from "../../../navBarLinks";
import { CiUser } from "react-icons/ci";
import Cart from "../Cart/Cart";
import Button from "../Button/Button";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState, useEffect } from "react";
import { VscCollapseAll } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const laptopnavLinks = LaptopnavBarLinks;
  const phonenavLinks = PhonenavBarLinks;

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

  const [menuopen, setMenuopen] = useState(false);

  const toggleMenu = () => {
    !menuopen ? setMenuopen(true) : setMenuopen(false);
    console.log(menuopen)
  };


  return (
    <>
      {windowDimension.winWidth <= 500 ? (
        // phone
        <nav>
          <div className="nav-group">
            <section className="logo">
              <Link to="/">
                <img src="/shopelogo.svg" alt="" />
              </Link>
            </section>

            <div className="group">
              <Cart />
              <Button
                funcClick={toggleMenu}
                className={"nav-btn"}
                headClassName="handbugger"
                btnType={"ghost"}
              >
                {!menuopen ? <HiOutlineMenuAlt3 /> : <VscCollapseAll />}
              </Button>
            </div>
          </div>
          <Search className={'nav-search'} exposed={true} /> 


          <section className={`nav_links phone ${menuopen ? "open" : ""} `}>
            <LinkSlider slider={false} links={phonenavLinks} className={'line-up'} />
            <div className="action-buttons phone">
              
              
              <Button
                className={"nav-btn phone"}
                btnLink={"/auth/login"}
                btnType={"ghost"}
                funcClick={toggleMenu}
              >
                <CiUser /> <span>My Account</span>
              </Button>
              <Button
                className={"nav-btn phone"}
                btnLink={"/auth/login"}
                btnType={"ghost"}
                funcClick={toggleMenu}
              >
                <IoIosLogOut /> <span>Logout</span>
              </Button>
            </div>
          </section>
        </nav>
      ) : (
        <nav>
          <section className="logo">
            <Link to="/">
              <img src="/shopelogo.svg" alt="" />
            </Link>
          </section>

          <section className={`nav_links ${menuopen ? "open" : ""} `}>
            <LinkSlider slider={true} links={laptopnavLinks} className={"separate"} func={toggleMenu} />
            <div className="action-buttons">
              <Button
                funcClick={toggleMenu}
                className={"nav-btn"}
                btnType={"ghost"}
              >
                <Search exposed={false} /> <span>Search for Products</span>{" "}
              </Button>
              <Button
                className={"nav-btn"}
                btnLink={"/auth/login"}
                btnType={"ghost"}
                funcClick={toggleMenu}
              >
                <CiUser /> <span>Access Your Account</span>
              </Button>
              <Cart />
            </div>
          </section>
        </nav>
      )}
    </>
  );
};

export default Navbar;
