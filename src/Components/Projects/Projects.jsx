import React from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../Asset/ecommerce.png";
import img from "../../Asset/musicapp.png";
import "swiper/css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="projects" id="Projects">
      <span style={{ color: darkMode ? "white" : "" }}>Projects</span>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="projects-slider"
      >
        <SwiperSlide>
          <Link
            to="/portfolio/ecommerce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
