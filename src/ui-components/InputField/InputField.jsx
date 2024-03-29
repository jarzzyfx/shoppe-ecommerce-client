// ghost underline -  underline light / underline bold
import Button from '../Button/Button'
import './InputField.css'
// ghost full

// text area
// inp field

// title on
// title off

const InputField = ({className,inpStyle, inpType, inpBold, fieldType, value, holder, inpTitle, icon, selectOption}) => {
    return <div className={`inp-cont ${className && className}`}>
       
        {inpType === 'field' && (<input className={`inp ${inpStyle === 'line' && 'line'} ${inpBold && 'inpBold'}`} type={fieldType}  placeholder={holder && holder} required/>)}
        {inpType === 'area' && (<textarea className={`inp ${inpStyle === 'line' && 'line'}`}  value={value} placeholder={holder && holder} required/>)}
        {inpType === 'select' && (
            <select className={`inp ${inpStyle === 'line' && 'line'}`} name="" id="0" aria-placeholder='Shop By'>
            {
                selectOption.map(option => (
                    <option value={option.key} key={option.key}>{option.text}</option>
                ))
            }
        </select>
        )}
        <label className={`label`}>
            {inpTitle}
        </label>
        
        {icon && (<Button className={'inp-btn'} btnType={'ghost'}>{icon}</Button>)}

    </div>
}

export default InputField