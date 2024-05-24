import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">

        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">100+</h3>
                <span className="about__subtitle">Project Complted</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className="about__title"> 17878</h3>
                <span className="about__subtitle">Cup of Coffee</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-graph"></i>

            <div>
                <h3 className="about__title">80+</h3>
                <span className="about__subtitle">Clients happy</span>
            </div>
        </div>

    </div> 
 )
}

export default AboutBox