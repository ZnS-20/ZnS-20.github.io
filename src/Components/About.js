import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='row bg-dark'>
            <div className='col-md-6'>
                <img src={require('./../assets/about.jpg')}
                    alt='MyPhoto' className='image' />
            </div>
            <div className='col-md-6 text-white'>
                <div className='container'>
                    <div className='aboutHeading'>
                        <h5>ABOUT</h5>
                    </div>
                    <p className='aboutContent'>Hi! I'm Mohammad Anas, an application engineer at Hexaview Technologies.
                        I am a backend developer who can develop web application server using Java frameworks.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;