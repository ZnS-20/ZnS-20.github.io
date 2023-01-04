import React from 'react';
import './About&SourceCode.css';

const SourceCode = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={require('./../assets/source1.jpg')}
                        alt='MyPhoto' className='image' />
                </div>
                <div className='col-md-6 rightSide'>
                    <h1 className='centerHeading'>Source Code</h1>
                    <p className='centerContent'>
                        The Website is insiped by <a id='link' href='https://lokkeestudios.com/' target='_blank' rel="noreferrer">"LOOKEE STUDIOS"</a>. If you want to explore the code of this website you can click on 'Explore Code' button.
                    </p>
                    <a href='https://github.com/ZnS-20/zns-20.github.io' target='_blank' rel="noreferrer">
                        <button className='btn btn-primary' id='explorebtn'>Explore Code</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SourceCode;