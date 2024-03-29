import './ContactUs.css'
import InputField from '../../ui-components/InputField/InputField'
import Button from '../../ui-components/Button/Button'

const ContactUs = () => {

    const subject = [
        {
            text: 'Subject',
            key: 0
        },
        {
            text: 'Product Complaint',
            key: 1
        },
        {
            text: 'Shipping Complaint',
            key: 2,

        },
        {
            text: 'Order Complaint',
            key: 3
        },
        {
            text: 'Suggestions and Improvments',
            key: 4
        },
        {
            text: 'Technical Issues',
            key: 5
        }
    ]

  return (
    <div className='contact'>
        <h1>Contact Us</h1>
        <article>
            Say hello, Send  us your thoughts about our products or share <br />
            Your ideas with our team.
            </article>

            <form action="">
           <div>
           <InputField className='contactInp' inpType={'field'} inpTitle={'First Name'} inpStyle={'line'} fieldType={'text'}/>
                <InputField className='contactInp' inpType={'field'} inpTitle={'Last Name'} inpStyle={'line'} fieldType={'text'}/>
                <InputField className='contactInp' inpType={'field'} inpTitle={'E-mail'} inpStyle={'line'} fieldType={'email'}/>
                <InputField className='contactInp' inpType={'select'} inpStyle={'line'} selectOption={subject}/>
                <InputField className='contactInp message' inpType={'area'} inpTitle={'Message'} inpStyle={'line'} />
   
           </div>
                <Button btnType={'fullBlack'} className="contact-btn">Send</Button>
            </form>
    </div>
  )
}

export default ContactUs