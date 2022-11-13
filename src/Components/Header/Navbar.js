import styles from "./Navbar.module.css"
import "../../index.css"
import {Link} from 'react-scroll'
const Navbar = () =>{
    return (
        <header className="fixed-top">
            <div id="header-nav">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark py-3">
                    
                    <div className="container-fluid">
                        <a id="header-logo" className="navbar-brand fs-3" href="#basic-intro">Weiss</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbar">
                            <ul className="navbar-nav fs-5">
                                {/*  <li><Link activeClass="active" className="test6" to="anchor" spy={true} smooth={true} duration={500}>Test 6 (anchor)</Link></li> */}
                                {/* Test here */}
                                <li className="nav-item me-3"><Link activeClass="active" className="nav-link" to="basic-intro" spy={true} smooth='linear' offset={-100} duration={300}><i className="fa-solid fa-house-chimney me-2"></i>Home</Link></li>
                                <li className="nav-item me-3"><Link activeClass="active" className="nav-link" to="about-me" spy={true} smooth='linear' offset={-100} duration={300}><i className="fa-solid fa-address-card me-2"></i>About me</Link></li>
                                <li className="nav-item me-3"><Link activeClass="active" className="nav-link" to="experience" spy={true} smooth='linear' offset={-100} duration={300}><i className="fa-solid fa-laptop me-2"></i>Experience</Link></li>
                                <li className="nav-item me-3"><Link activeClass="active" className="nav-link" to="skills" spy={true} smooth='linear' offset={-100} duration={300}><i className="fa-solid fa-toolbox me-2"></i>Skills</Link></li>
                                <li className="nav-item me-3"><Link activeClass="active" className="nav-link" to="footer" spy={true} smooth='linear' offset={-100} duration={300}><i className="fa-solid fa-address-book me-2"></i>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;