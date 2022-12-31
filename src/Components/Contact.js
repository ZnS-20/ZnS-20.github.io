import './Contact.css';
import React from 'react'

const Contact = () => {
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
                        <form className='inputForm'>
                            <div className="form-group">
                                <span className='form-name-heading'>Name</span>
                                <input type="text" className="form-control" value={name} onChange={setOnChangeName} />
                            </div>
                            <div className="form-group">
                                <span className='form-name-heading'>Email</span>
                                <input type="email" className="form-control" value={email} onChange={setOnChangeEmail} />
                            </div>
                            <div className="form-group">
                                <span className='form-name-heading'>Message</span>
                                <textarea className="form-control" rows="3" value={message} onChange={setOnChangeMessage}></textarea>
                            </div>
                            <button className="btn btn-default align-left" type="submit" name="button" disabled={(email.replaceAll(/\s/g, '').length === 0
                                || message.replaceAll(/\s/g, '').length === 0
                                || name.replaceAll(/\s/g, '').length === 0) ? true : false}>
                                Send a Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;