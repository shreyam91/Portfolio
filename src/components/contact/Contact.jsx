import { useState } from 'react'
import axios from 'axios';
import './contact.css';
import { FaRegAddressBook, FaRegEnvelopeOpen, FaRegUser, FaRegMap } from "react-icons/fa";


const Contact = () => {

    const [form, setForm] = useState({name:'', email:'', subject:'', message:''})

    const handleChange =(e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form,[name]: value});
    }

    const handleSubmit =(e) =>{
        e.preventDefault();

        axios.post('https://sheet.best/api/sheets/70152cd4-664e-495e-91ba-4f4438e4797b', form).then((response) =>{
            console.log(response);
            // clearing the form fields
            setForm({name:'', email:'', subject:'', message:''});
        })
    }

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title text-cs"> Connect With Me</h2>
        <p className="section__subtitle">
            Let's <span> Talk About Ideas  </span>
        </p>

        <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegMap/>
                        </span>

                        <h3 className="contact__card-title"> Address</h3>
                        <p className="contact__card-data"> Kanpur, Uttar Pradesh</p>
                    </div>
                    
                    
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegUser/>
                        </span>

                        <h3 className="contact__card-title"> Freelance</h3>
                        <p className="contact__card-data"> Available Right Now</p>
                    </div>
                    
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegEnvelopeOpen/>
                        </span>

                        <h3 className="contact__card-title"> Email </h3> 
                        <p className="contact__card-data"> sk0668972@gmail.com</p>
                    </div>
                    
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegAddressBook/>
                        </span>

                        <h3 className="contact__card-title">Phone</h3>
                        <p className="contact__card-data"> +91 - 6392764845 </p>
                    </div>
                </div>

                <form className='contact__form' onSubmit={handleSubmit}>
                    <div className="contact__form-group grid">
                        <div className="contact__form-div">
                            <label  className="contact__form-tag text-cs"> Your Name <b>*</b></label>
                                <input type="text" name='name' value={form.name} onChange={handleChange} className="contact__form-input" />
                        </div>
                        
                        <div className="contact__form-div">
                            <label  className="contact__form-tag text-cs"> Your Email <b>*</b></label>
                                <input type="email" name='email' value={form.email} onChange={handleChange}className="contact__form-input" />
                        </div>
                    </div>

                    <div className="contact__form-div">
                            <label  className="contact__form-tag text-cs"> Your Subject <b>*</b></label>
                            <input type="text" name='subject' value={form.subject} onChange={handleChange} 
                            className="contact__form-input" />
                    </div>

                    <div className="contact__form-div contact__form-area">
                            <label  className="contact__form-tag text-cs"> Your Message <b>*</b></label>
                            <textarea className='contact__form-input' name='message' value={form.message} onChange={handleChange} />
                    </div>

                    <div className="conatct__submit">
                        <p>*Terms and conditions apply.</p>

                        <button type='submit' className='btn text-cs'> Send Message </button>
                    </div>
                </form>
        </div>  
    </section>
  )
}

export default Contact
