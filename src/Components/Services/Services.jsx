import React from "react";
import './Services.css'
import Glasses from'../../img/glasses.png';
import HeartEmoji from'../../img/heartemoji.png';
import Humble from'../../img/humble.png';
import Card from "../Card/Card";
import Resume from '../../img/resume.pdf'
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'
import Transkrip from '../../img/transkrip.pdf';

const Services = () => {

    const transition = {duration : 1, type : 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
      <div className="services" id='Services'>

        {/* left side */}
        <div className="awesome">
        <span style = {{color: darkMode? 'white' : ''}}>My Awesome</span>
        <span>Services</span>
        <spane>
            Love to working as Front-end Web Developer
            <br />
            I am undergraduate student majority technology information
        </spane>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>

        <a href={Transkrip} download>
        <button className="button s-button">Download Transkrip</button>
        </a>

        <div className="blur s-blur1" 
                style={{background: "#ABF1FF94"}}>
        </div>
        </div>

        {/* right side */}
        <div className="cards">
                <motion.div
                whileInView={{left: '24rem'}}
                initial={{left :'36rem'}}
                transition={transition}

                style={{left : '36rem'}}>
                    <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {"Microsoft, Photoshop, Premiere Pro, Blender"}
                    />
                </motion.div>

                <motion.div 
                whileInView={{left: '8rem'}}
                initial={{left :'0rem'}}
                transition={transition}
                style={{top : '12rem', left : '0rem'}}>
                    <Card
                    emoji = {Glasses}
                    heading = {"Developer"}
                    detail = {"Html, Css, C#, React"}
                    />
                </motion.div>

                {/* <motion.div
                whileInView={{left: '27rem'}}
                initial={{left :'42rem'}}
                transition={transition}
                style={{top : '17rem', left : '42rem'}}>
                    <Card
                    emoji = {Humble}
                    heading = {"UI/UX"}
                    detail = {"Description Text"}
                    />
                </motion.div> */}
                <div className="blur s-blur2" 
                style={{ background: "var(--purple)", 
                top : '17rem',
                width: '21rem',
                height: '11rem',}}></div>
        </div>
      </div>
    )

}

export default Services