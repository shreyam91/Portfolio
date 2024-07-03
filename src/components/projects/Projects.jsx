import { FaLocationArrow } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import { projects } from '../../Data';
import './projects.css';

import 'swiper/css';
import 'swiper/css/pagination';
const Projects = () => {
  return (
    <section className="container__section" id='projects'>
        <h2 className="section__title text-cs"> Portfolio</h2>
        <p className="section__subtitle">
            My <span> Works </span>
        </p>

        <Swiper  
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
          className="projects__container container mySwiper">
            {projects.map(({category, title, description, link}, index) => {
                return (
                    <SwiperSlide className="projects__item card card-one">
                        <span className="projects__subtitle text-cs">{category}</span>

                        <h3 className='projects__title'>{title}</h3>

                        <p className="projects__description">{description}</p>

                        <a href={link} target='_blank' className="link"> Github <FaLocationArrow className='link__icon'/> </a>
                        <img src={shapeTwo} alt="" className="shape c__shape" />
                    </SwiperSlide>
                )
            })}
        </Swiper>

        <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className='shape'/>
        </div>

    </section>
  )
}

export default Projects