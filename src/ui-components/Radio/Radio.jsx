import { useState } from 'react'
import './Radio.css'

const Radio = ({ activeText, defaultText}) => {

  const [roll, setRoll] = useState(false)

  const handleRadio = () => {
    setRoll(!roll)
  }
  const setTitle = () => {
    document.querySelector('title').textContent = activeText
    return 'active'
  }
  const removeTitle = () => {
    document.querySelector('title').textContent = defaultText
    return ''
  }

  return (
    <button  className={`radio ${roll ? setTitle(): removeTitle()}`} onClick={handleRadio}>
      <div className={`ball ${roll ? 'roll' : ''}`}></div>
   
    </button>
  )
}

export default Radio