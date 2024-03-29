import './Register.css'
import InputField from '../../../ui-components/InputField/InputField'
import { FaEyeSlash } from "react-icons/fa";
import Button from '../../../ui-components/Button/Button';
import Checkbox from '../../../ui-components/Checkbox/Checkbox';

const Register = () => {
  return (
    <div className='reg'>
      <InputField className={'reg-inp'} fieldType={'text'} inpType={'field'} inpStyle={'line'} inpTitle={'Firrst Name'}/>
      <InputField className={'reg-inp'} fieldType={'text'} inpType={'field'} inpStyle={'line'} inpTitle={'Last Name'}/>
      <InputField className={'reg-inp'} fieldType={'email'} inpType={'field'} inpStyle={'line'} inpTitle={'E-mail'}/>
      <div>
      <InputField className={'reg-inp'} fieldType={'password'} inpType={'field'} inpStyle={'line'} inpTitle={'Password'} icon={<FaEyeSlash />}/>
      <Checkbox text={'I have Read And Agreed To The Terms and Conditions of Shoppe'} />
      </div>
      <section>
      <Button className={'reg-btn'} setWidth={'full'} btnType={'fullBlack'}>Sign In</Button>
      </section>
    </div>
  )
}

export default Register