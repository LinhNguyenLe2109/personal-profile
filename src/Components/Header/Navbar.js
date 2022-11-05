import styles from "./Navbar.module.css"
import "../../index.css"
const Navbar = () =>{
    return (
        <header className="fixed-top">
            <div id="header-nav">
                {/* <div id="header-logo">
                    <a href="#basic-intro">Anwyll</a>
                </div>
                <i id="nav-icon" className="fa-solid fa-bars fa-3x"></i>
                <nav id="navbar">
                    <ul>
                        <li><a href="#basic-intro">Home</a></li>
                        <li><a href="https://www.facebook.com/" >About me</a></li>
                        <li><a href="https://www.facebook.com/" >Contact</a></li>
                    </ul>
                </nav> */}
                <nav className="navbar navbar-expand-md navbar-dark bg-dark py-3">
                    <div className="container-fluid">
                        <a id="header-logo" className="navbar-brand fs-3" href="#basic-intro">Weiss</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbar">
                            <ul className="navbar-nav fs-5">
                                <li className="nav-item me-3">
                                <a className="nav-link active" aria-current="page" href="#basic-intro"><i className="fa-solid fa-house-chimney me-2"></i>Home</a>
                                </li>
                                <li className="nav-item me-3">
                                <a className="nav-link disabled" href="#basic-intro"><i className="fa-solid fa-address-card me-2"></i>About me</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link disabled" href="#basic-intro"><i className="fa-solid fa-address-book me-2"></i>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;