import React from 'react';
import Resume from './../assets/about.jpg';

const Navbar = () => {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light mr-auto sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Mohammad Anas</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='float-right'>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Project</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={Resume} download="Resume.jpg" rel='noreferrer' target='_blank'>Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>);
}

export default Navbar;