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
                <div className='legend'>
                    <a href='https://github.com/ZnS-20/Success-Gateway' target='_blank' rel='noreferrer'>
                        <div className='d-flex'><h3>LeetCode and CP Solution</h3></div>
                        <div className='to-hover'>
                            <div className='d-flex to-show'>
                                Tech Stach:<u>&nbsp; Java</u></div>
                            <div className='d-flex to-show'>Solution of some of the leetcode problems.</div>
                        </div>
                    </a>
                </div>
            </div>
            <div>
                <img className='carousel' src={require('./../assets/image2.jpg')} alt='P2' />
                <div className="legend">
                    <a href='https://github.com/ZnS-20/Success-Gateway' target='_blank' rel='noreferrer'>
                        <div className='d-flex'><h3>Implementing Blockchain</h3></div>
                        <div className='to-hover'>
                            <div className='d-flex to-show'>Tech Stack:
                                <u>
                                    &nbsp;Solidity, Ethereum, MetaMask
                                </u>
                            </div>
                            <div className='d-flex to-show'>Created a simple Auction application using the concepts of Blockchain.</div>
                        </div>
                    </a>
                </div>
            </div>
        </Carousel>
    )
}

export default Projects;