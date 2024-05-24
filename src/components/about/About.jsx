import './about.css'
import AboutImg from'../../assets/avatar-2.svg';

import AboutBox from './AboutBox';
const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">
        About Me
      </h2>
      
      <div className="about__container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis illum magni ad. Maiores dolore eveniet beatae quo minus debitis itaque ratione, esse, eum culpa perspiciatis tempora est, accusamus et nostrum.
            </p>
            <a href="" className="btn"> Download Resume </a>
          </div>
          <div className="about__skills grid">

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Web Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number">50%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About