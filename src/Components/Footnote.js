import React from 'react';
import { FaDiscord, FaGithubSquare } from "react-icons/fa";

const Footnote = () => {
    return (
        <div id='footnote' className='text-white bg-dark'>
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
            <div className='d-flex justify-content-center'>
                <FaDiscord size={30} />
                <FaGithubSquare size={30} />
            </div>
        </div>
    );
}

export default Footnote;