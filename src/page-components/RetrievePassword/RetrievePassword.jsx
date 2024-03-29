
import './RetrievePassword.css'
import InputField from '../../ui-components/InputField/InputField'
import Button from '../../ui-components/Button/Button'

const RetrievePassword = () => {
  return (
    <div className='retrievePs'>
        <h1>Have You Forgotten Your Password ?</h1>

        <h3>If you have forgotten your password, enter your e-mail <br />address and we will send yu an e-mail</h3>
        <form action="">
            <InputField className={'retrievEdit'} inpType={'field'} inpStyle={'line'} inpTitle={'E-mail'} fieldType={'email'} />
            <Button className={'retrievEdit'} setWidth={'full'} btnType={'fullBlack'}>RESET PASSWORD</Button>
        </form>
        
    </div>
  )
}

export default RetrievePassword