import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Project.css';

const Projects = () => {
    return (
        <Carousel
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            infiniteLoop={true}
            transitionTime={200}
            autoPlay
            stopOnHover
            useKeyboardArrows>
            <div>
                <img className='carousel' src={require('./../assets/image1.png')} alt='P1' />
                <p className="legend">Project 1</p>
            </div>
            <div>
                <img className='carousel' src={require('./../assets/image2.jpg')} alt='P2' />
                <p className="legend">Project 2</p>
            </div>
        </Carousel>
    )
}

export default Projects;