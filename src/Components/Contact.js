import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [message, setMessage] = React.useState('');

    function setOnChangeMessage(event) {
        setMessage(event.target.value);
    }

    function setOnChangeName(event) {
        setName(event.target.value);
    }

    function setOnChangeEmail(event) {
        setEmail(event.target.value);
    }

    return (
        <section id="contact">
            <div className="container">
                <div className="well well-lg">
                </div>

                <div className="row">
                    <div className="col-md-7" id='message'>
                        <div className='contactHeading'>
                            <h5>CONTACT</h5>
                        </div>
                        <h3><strong>Got a problem to solve?</strong></h3>
                        <p><a href='mailto:anas.mohd20.99@gmail.com'>anas.mohd20.99@gmail.com</a></p>
                    </div>

                    <div className="col-md-5">
                        <form className='inputForm' ref={form} onSubmit={(event) => {
                            event.preventDefault();
                            emailjs.sendForm('service_xhhifi9', 'template_xn5ei46', form.current, 'GHNXmSWH9dWJzsAk_')
                                .then((result) => {
                                    alert('Message Sent Successfully');
                                    setEmail('');
                                    setMessage('');
                                    setName('');
                                }, (error) => {
                                    alert('Unable to Sent Email. Please try again later' + error.text);
                                });
                        }}>
                            <div className="form-group">
                                <span className='form-name-heading'>Name</span>
                                <input name='from_name' type="text" className="form-control" value={name} onChange={setOnChangeName} />
                            </div>
                            <div className="form-group">
                                <span className='form-name-heading'>Email</span>
                                <input name='from_email' type="email" className="form-control" value={email} onChange={setOnChangeEmail} />
                            </div>
                            <div className="form-group">
                                <span className='form-name-heading'>Message</span>
                                <input name='from_message' className="form-control message" rows="3" value={message} onChange={setOnChangeMessage}></input>
                            </div>
                            <input className='align-left' type='submit' value="Send Message">
                            </input>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;