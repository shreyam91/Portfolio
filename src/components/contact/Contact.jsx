import './contact.css'

const Contact = () => {
  return (
<section className="contact container section" id="contact">
  <h2 className="section__title">Get In Touch</h2>

  <div className="contact__container grid">

    <div className="contact__info">
      <h3 className="contact__title"> Let's talk about everythinh!</h3>
      <p className="contact__details"> Don't want to fill forms? Just send me an email..</p>
    </div>

    <form action="" className='contact__form'>

      <div className="contact__form-group">
        <div className="contact__form-div">
          <input type="text" className="contact__form-input" placeholder='Your Name'/>
        </div>
      
        <div className="contact__form-div">
          <input type="email" className="contact__form-input" placeholder='Your Email'/>
        </div>
      
      </div>

        <div className="contact__form-div">
          <input type="text" className="contact__form-input" placeholder='Enter Subject here'/>
        </div>
        
        <div className="contact__form-div contact__form-area">
          <textarea name="" cols="30" row="10" className="contact__form-input" id="" placeholder='Enter your query or message!'></textarea>
        </div>

    <button className='btn'>Send Message</button>

    </form>

  </div>
</section>  )
}

export default Contact