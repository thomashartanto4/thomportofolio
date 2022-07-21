import React from "react";
import './Portofolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Introducing from "../../img/introducing.png";
import Movielist from "../../img/movielist.png";
import 'swiper/css'
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portofolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return(
        // heading
        <div className="portofolio" id='Portofolio'>
            <span style = {{color: darkMode? 'white' : ''}}>My Projects</span>
            <span>Portofolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portofolio-slider'
        >
            <SwiperSlide>
                <img src={Introducing} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Movielist} alt=""/>
            </SwiperSlide>
            {/* <SwiperSlide>
                <img src={Musicapp} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt=""/>
            </SwiperSlide> */}
        </Swiper>
        
        </div>
    )
}

export default Portofolio