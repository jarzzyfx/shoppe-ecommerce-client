import { useState, useEffect } from 'react';
import './LinkSlider.css';
import { Link } from 'react-router-dom';

const LinkSlider = ({ links,func, className, slider,linkFormat }) => {
  const [activeLink, setActiveLink] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({});

  useEffect(() => {
    // Set the default active link style when the component mounts
    handleActiveLinkStyle(0);
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const handleClick = (index) => {
    setActiveLink(index);
    handleActiveLinkStyle(index);
    func
  };


  const handleActiveLinkStyle = (index) => {
    const link = document.getElementById(`link-${index}`);
    setUnderlineStyle({
      width: `${link.offsetWidth}px`,
      left: `${link.offsetLeft}px`
    });
  };

  return (
    <div className={`nav-links ${linkFormat === 'column' && 'column'} ${className}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          id={`link-${index}`}
          className={activeLink === index ? 'active' : ''}
          onClick={() => handleClick(index)}
          to={link.url}
        >
          {link.text}
        </Link>
      ))}
     {slider && ( <div className="underline" style={underlineStyle}></div>)}
    </div>
  );
};

export default LinkSlider;
