import React from "react";
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from'../../img/Vector1.png';
import Vector2 from'../../img/Vector2.png';
import bro from'../../img/bro.png';
import thumbup from'../../img/thumbup.png';
import Crown from'../../img/crown.png';
import glassesimoji from'../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'

const Intro = () =>{

    const transition = {duration : 2, type : 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style = {{color: darkMode? 'white' : ''}}>Hi! I Am</span>
                    <span>Thomas Hartanto</span>
                    <span>I'm undergraduate student from Universitas Bunda Mulia majoring
                        Computer Science
                    </span>
                    <span>GPA : 3.70</span>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                <button className="button i-button">Hire Me</button>
                </Link>
                
                <div className="i-icons">
                    <a href="https://github.com/thomashartanto4">
                    <img src={Github} alt=""/></a>
                    <a href="https://https://www.linkedin.com/in/thomas-hartanto-34b24b220/github.com/thomashartanto4">
                    <img src={Linkedin} alt=""/></a>
                    <a href="https://instagram.com/thomashartanto_">
                    <img src={Instagram} alt=""/></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt=""/>
                <img src={Vector2} alt=""/>
                <img src={bro} alt=""/>
                <motion.img 
                initial = {{left : '-36%'}}
                whileInView= {{left: '-24%'}}
                transition={transition}
                src={glassesimoji} alt=""/>

                <motion.div
                initial = {{top : '-4%', left:'74%'}}
                whileInView= {{left: '68%'}}
                transition={transition}
                style={{top: '-4%', left: '68%'}}
                className='floating-div'
                >
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div
                initial = {{top : '18rem', left:'9rem'}}
                whileInView= {{left: '0rem'}}
                transition={transition}
                style={{top: '21rem', left:'-2rem'}}
                className='floating-div'>
                    <FloatingDiv image={thumbup} txt1='Undergraduate'/>
                </motion.div>
                {/* blur bg */}
                <div className="blur" 
                style={{background: "rgb(239 21- 255)"}}>
                </div>
                <div className="blur" 
                style={{ background: '#C1F5ff', 
                top : '17rem',
                width: '21rem',
                height: '11rem',}}></div>
                <div className="blur" 
                style={{ background: '#fff59e', 
                top : '17rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem'}}></div>
                <div className="blur" 
                style={{background: "#cccccc", left: '-5rem'}}>
                </div>
                {/* end blur */}
            </div>
        </div>
    )
}

export default Intro