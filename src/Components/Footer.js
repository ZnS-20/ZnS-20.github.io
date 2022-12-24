import React from 'react';
import { FaDiscord, FaGithubSquare } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
        <div id='footnote' className='text-white bg-dark d-flex justify-content-center'>
            <div className='content-center'>
                <section className='d-none d-md-block'>
                    <hr></hr>
                    <div className='d-flex justify-content-center'>
                        <span>
                            <ul className="list-unstyled d-flex d-inline-flex justify-content-around">
                                <li>
                                    <a className="btn btn-default text-white" href="/">Home</a>
                                </li>
                                <li>
                                    <a className="btn btn-default text-white" href="/">Project</a>
                                </li>
                                <li>
                                    <a className="btn btn-default text-white" href="/">Resume</a>
                                </li>
                                <li>
                                    <a className="btn btn-default text-white" href="/">About Me</a>
                                </li>
                                <li>
                                    <a className="btn btn-default text-white" href="/">Contact</a>
                                </li>
                            </ul>
                        </span>
                    </div>
                    <hr></hr>
                </section>
                <div className='d-flex justify-content-center'>
                    <FaDiscord size={30} />
                    <FaGithubSquare size={30} />
                </div>
            </div>
        </div>
    );
}

export default Footer;