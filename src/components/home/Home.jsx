import { SiLeetcode } from "react-icons/si";
import { FaGithub,FaLinkedinIn } from "react-icons/fa";

import './home.css';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import resume from '../../assets/Shreyam Kanaujiya.pdf';

const Home = () => {
  return (
    <section className='home' id='home'>
        <div className="home__wrapper">
        <div className="home__container container">
        <p className="home__subtitle text-cs">
            hello <span>My name is </span>
        </p>

        <h1 className="home__title text-cs">
            <span>Shreyam</span> Kanaujiya 
        </h1>

        <p className="home__job">
            <span className="text-cs">I am </span> <b>Web Developer </b>
        </p>

        <div className="home__img-wrapper">
            <div className="home__banner">
                {/* <img src={profileImg} alt="" className='home__profile'/> */}
            </div>

        <a href="https://github.com/shreyam91" target='_blank'>
            <p className="home__data home__data-one">

                <span className="text-sm text-cs">Github</span>
                <span className="text-lg"><FaGithub /></span>
            </p> 
            </a>
            
            <a href="https://www.linkedin.com/in/shreyam-kanaujiya/" target='_blank'>
            <p className="home__data home__data-two">

                <span className="text-sm text-cs">LinkedIn</span>
                <span className="text-lg"><FaLinkedinIn /></span>
            </p>
            </a>
            
            <a href="https://leetcode.com/u/Shrey91leet/" target='_blank'>
            <p className="home__data home__data-three">

                <span className="text-sm text-cs">LeetCode</span>
                <span className="text-lg"><SiLeetcode /></span>
            </p>
            </a>

            {/* <img src={shapeOne} alt="" className="shape shape__1" /> */}
            {/* <img src={shapeTwo} alt="" className="shape shape__2" /> */}
            {/* <img src={shapeTwo} alt="" className="shape shape__3" /> */}
        </div>

        <p className="home__text">
        A highly skilled web developer with expertise in front-end and back-end development. Proficient in HTML, CSS, JavaScript,React, and responsive design principles. Experienced in creating and maintaining websites to meet client specifications and enhance user experience.
        </p>

        {/* <div className="home__socials">
            <a href="https://leetcode.com/u/Shrey91leet/" target='_blank' className="home__socials-link">
            <SiLeetcode /> 
            </a>
            <a href="https://github.com/shreyam91" target='_blank' className="home__socials-link">
            <FaGithub /> 
            </a>
            <a href="https://www.linkedin.com/in/shreyam-kanaujiya/" target='_blank' className="home__socials-link">
            <FaLinkedinIn /> 
            </a>
        </div> */}

        <div className="home__btns">
            <a download='' href={resume} className="btn text-cs">Download CV</a>

            <a href="#skills" className="hero__link text-cs">My Skills</a>
        </div>
        </div>
        
        <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className='shape'/>
        </div>

        </div>
        
    </section>
  )
}

export default Home