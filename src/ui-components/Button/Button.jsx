// ghost white
// ghost black
// full black
// fient
// ghost
// full white

// natural
// fw
// set w

// set border
// smooth bordewr
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({children,btnType,setBorder, setWidth,headClassName, className, funcClick, btnLink}) => {
    return <Link className={headClassName} to={btnLink && btnLink}>
     <button onClick={funcClick && funcClick} className={`btn ${className && className } ${setWidth === 'full' ? 'fwt' : setWidth === 'modify' && 'setw'} ${setBorder === 'smooth' ? 'smb' : setBorder === 'basic' && 'bcb'} ${btnType ==='ghostWhite' ? 'gw' : btnType ==='ghostBlack' ? 'gb' : btnType ==='fullBlack' ? 'fb' : btnType ==='fient' ? 'ft' : btnType ==='fullWhite' ? 'fwh' :  'g' }`}>{children}</button></Link>
}

export default Button