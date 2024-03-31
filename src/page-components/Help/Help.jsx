
import { useEffect, useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import './Help.css'
import { IoDocumentAttachOutline } from "react-icons/io5";
import { BsBox2Heart } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { AiOutlineRedo } from "react-icons/ai";
import ErrorHandler from '../ErrorHandler/ErrorHandler'


const Help = () => {

 

    const HelpBar = ({icon, name}) => {
        return (
            <div className="help-bar">
               <div>
               {icon}
                <h3>{name}</h3>
               </div>
                <FaChevronRight />
            </div>
        )
    }


    // helper 
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
    <>
                <div className='help'>
                    <h1>Help</h1>
                    <section className='help-bars'>
                        <HelpBar icon={<IoDocumentAttachOutline />} name={'Terms of service'}/>
                        <HelpBar icon={<BsBox2Heart />} name={'Shipping'}/>
                        <HelpBar icon={<CiLock />} name={'Privacy Policy'}/>
                        <HelpBar icon={<AiOutlineRedo />} name={'Return and exchanges'}/>
                    </section>
               </div>
           
        
    </>
  )

}

export default Help