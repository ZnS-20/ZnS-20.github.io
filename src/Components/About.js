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
                        <p className='centerContent'>
                            Hi! I am Mohammad Anas. I am working as a senior application engineer at Hexaview, where my responsibilities are to manage and create Java-based web applications, create data migration jobs using Talend Open Studios, and train newly hired employees. Apart from Hexaview, I had created websites using HTML/CSS, ReactJS, and mobile applications using React-Native.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;