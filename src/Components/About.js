import React from 'react';
import './About&SourceCode.css';

const About = () => {
    return (
        <div className='container-fluid bg-dark'>
            <div className='row'>
                <div className='col-md-6 d-none d-md-block'>
                    <img src={require('./../assets/about.jpg')}
                        alt='MyPhoto' className='image' />
                </div>
                <div className='col-md-6 text-white'>
                    <div className='container'>
                        <div className='centerHeading'>
                            <h5>ABOUT</h5>
                        </div>
                        <p className='centerContent'>Hi! I'm Mohammad Anas, an application engineer at Hexaview Technologies.
                            I am a backend developer who can develop Web Application, create Web Pages, develop  Mobile Applications.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;