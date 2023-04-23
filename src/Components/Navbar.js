import React from 'react';
import Resume from './../assets/Mohammad_Anas_Resume.pdf';
import './Navbar.css';

const Navbar = React.memo(({ childToParent }) => {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light mr-auto sticky-top">
            <div className="container-fluid">
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navbar-inverse"></span>
                </button>
                <a className="navbar-brand mr-auto" href="/">Mohammad Anas</a>
                <div className='float-right'>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a data-toggle="collapse" data-target=".in" className="nav-link" href='#project' onClick={() => childToParent('project')}>Project</a>
                            </li>
                            <li className="nav-item">
                                <a data-toggle="collapse" data-target=".in" className="nav-link" href={Resume} download="Mohammad_Anas_Resume.pdf" rel="noopener noreferrer" target='_blank'>Resume</a>
                            </li>
                            <li className="nav-item">
                                <a data-toggle="collapse" data-target=".in" className="nav-link" href='#about' onClick={() => childToParent('about')}>About Me</a>
                            </li>
                            <li className="nav-item">
                                <a data-toggle="collapse" data-target=".in" className="nav-link" href='#contact' onClick={() => childToParent('contact')}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>);
});

export default Navbar;