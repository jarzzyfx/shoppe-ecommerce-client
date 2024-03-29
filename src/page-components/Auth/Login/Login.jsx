import './Login.css'
import InputField from '../../../ui-components/InputField/InputField'
import { FaEyeSlash } from "react-icons/fa";
import Button from '../../../ui-components/Button/Button';
import Checkbox from '../../../ui-components/Checkbox/Checkbox';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='log'>
      <InputField className={'log-inp'} fieldType={'email'} inpType={'field'} inpStyle={'line'} inpTitle={'E-mail'}/>
      <div>
      <InputField className={'log-inp'} fieldType={'password'} inpType={'field'} inpStyle={'line'} inpTitle={'Password'} icon={<FaEyeSlash />}/>
      <Checkbox text={'Remember me'} />
      </div>
      <section>
      <Button className={'log-btn'} setWidth={'full'} btnType={'fullBlack'}>Sign In</Button>
      <Link to={'/retrieve-password'}>Have You Forgotten Your Password?</Link>
      </section>
    </div>
  )
}

export default Login