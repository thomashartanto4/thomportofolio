import React from "react";
import "./Works.css"
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'
import { Link } from "react-scroll";


const Works = () => {
    const transition = {duration : 3.5, type : 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="works">
            <div className="awesome">
                <span style = {{color: darkMode? 'white' : ''}}>Works for all these</span>
                <span>Brands & Client</span>
                <spane>HTML, CSS
                    <br />
                    React JS
                    <br />
                    C#, C
                    <br />
                    Unity, Vuforia Engine
                </spane>

            <button className="button s-button">
                <Link spy={true} to='Contact' smooth={true}>
                Hire Me
                </Link>
            </button>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/* right side */}
            <div className="w-right">
                <motion.div
                initial={{rotate:45}}
                whileInView={{rotate : 0}}
                viewport={{margin:'-40px'}}
                transition={transition}
                className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt=""/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt=""/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt=""/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt=""/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt=""/>
                    </div>
                </motion.div>
                {/* bg circle */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>


            </div>

        </div>
    )
}

export default Works