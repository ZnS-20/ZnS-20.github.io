import './Home.css';
import React from 'react';

const Home = ({ childToParents }) => {
    return (
        <div className='bg-dark home'>
            <img className='home-img' src={require('./../assets/Home.png')} alt="HomePageimg" />
            <div className='centered'>
                <h1>Programmer and Developer</h1>
            </div>
            <div className='centered'>
                <h1>Programmer and Developer</h1>
            </div>
            <div className='bottom  text-center'>
                <a className="btn text-white home-btn" href='#project' onClick={() => childToParents('project')}>Explore My Work</a>
            </div>
        </div>
    )
}

export default Home;