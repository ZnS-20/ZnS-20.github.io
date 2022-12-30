import React from 'react';
import './About&SourceCode.css';

const SourceCode = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={require('./../assets/about.jpg')}
                        alt='MyPhoto' className='image' />
                </div>
                <div className='col-md-6 rightSide'>
                    <h1 className='centerHeading'>Source Code</h1>
                    <p className='centerContent'> Lorem ipsum dolor sit amet consectetur adipisicing elit. At sed necessitatibus quaerat culpa quia ratione quod eius repellat officia voluptate rem exercitationem, quas numquam dignissimos! Cupiditate quae explicabo quo inventore.</p>
                    <button className='btn btn-primary' id='explorebtn'>Explore Code</button>
                </div>
            </div>
        </div>
    )
}

export default SourceCode;