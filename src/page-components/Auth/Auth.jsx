import './Auth.css'
import Button from '../../ui-components/Button/Button'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
    const [login, setLogin] = useState(true)

    const location=window.location.pathname

    console.log(location);

    const LoginUser = () => {
        if(!login){
            setLogin(true)
        }
    }
    const RegisterUser = () => {
        if(login){
            setLogin(false)
        }
    }

  return (
    <div className='auth'>
        <h1>My Account</h1>
        <main>
        <header>
            <Button btnLink={'/auth/login'} className={'slider-button'} btnType={'ghost'} funcClick={LoginUser}>Sign-in</Button>
            <Button btnLink={'/auth/register'} className={'slider-button'} btnType={'ghost'} funcClick={RegisterUser}>Register</Button>
            <div className={`slider ${!login ||  location === '/auth/register' ? 'move' : ''}`}></div>
        </header>
     
            <div>
            <Outlet/>
            </div>
        </main>
    </div>
  )
}

export default Auth