import React from 'react';
import { FaLinkedinIn, FaGithubSquare } from "react-icons/fa";
import './Footer.css'

const Footer = ({ childToParents }) => {
    return (
        <div id='footnote' className='text-white bg-dark d-flex justify-content-center'>
            <div className='content-center'>
                <section className='d-none d-md-block'>
                    <hr></hr>
                    <div className='d-flex justify-content-center'>
                        <span>
                            <ul className="list-unstyled d-flex d-inline-flex justify-content-around">
                                <li>
                                    <a className="btn text-white" href='#project' onClick={() => childToParents('project')}>Project</a>
                                </li>
                                <li>
                                    <a className="btn text-white" href='#contact' onClick={() => childToParents('contact')}>Contact</a>
                                </li>
                                <li>
                                    <a className="btn text-white" href='#about' onClick={() => childToParents('about')}>About</a>
                                </li>
                                <li>
                                    <a className="btn text-white" href='#sourceCode' onClick={() => childToParents('sourceCode')}>SourceCode</a>
                                </li>
                            </ul>
                        </span>
                    </div>
                    <hr></hr>
                </section>
                <div className='d-flex justify-content-center'>
                    <a href='https://github.com/ZnS-20' target='_blank' rel="noopener noreferrer">
                        <FaGithubSquare size={30} id='SocialIcons' className='InvertColor' />
                    </a>
                    <a href='https://www.linkedin.com/in/mohammad-anas-888579181/' target='_blank' rel="noopener noreferrer">
                        <FaLinkedinIn size={30} id='SocialIcons' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;