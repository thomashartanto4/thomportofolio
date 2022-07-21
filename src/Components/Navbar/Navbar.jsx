import React from "react";
import './Navbar.css'
import Toggle from "../Toggle/Toggle";
import {Link} from 'react-scroll'

const Navbar = () => {
    return(
        <div className="n-wrapper" id='Navbar'>
            <div className="n-left">
                <div className="n-name">Thomas</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                        <li>About</li>
                        </Link>
                        <Link spy={true} to='Portofolio' smooth={true}>
                        <li>Portofolio</li>
                        </Link>
                    </ul>
                </div>
                <button className="button n-button">
                        <Link spy={true} to='Contact' smooth={true}>
                        Contact
                        </Link>
                </button>
            </div>
        </div>
    )
}

export default Navbar