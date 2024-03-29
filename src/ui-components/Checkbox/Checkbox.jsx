// checked
// unchecked

import './Checkbox.css'


const Checkbox = ({text}) => {
  return (
    <div className='cb'>
        <input type="checkbox" />
        <h3>{text}</h3>
    </div>
  )
}

export default Checkbox