import './ErrorHandler.css'
import Button from '../../ui-components/Button/Button'

const ErrorHandler = () => {
  document.querySelector('title').textContent = 'Shoppe - 404 Error'
  return (
    <div className='errorPage'>
      <h1>404 ERROR</h1>
      <article>This Page Is Not Found. <br />Back to Home And Start Again. </article>
      <Button btnLink={'/'} btnType={'ghostBlack'}>HOMEPAGE</Button>
    </div>
  )
}

export default ErrorHandler