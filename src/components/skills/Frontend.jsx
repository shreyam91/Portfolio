import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend </h3>

        <div className="skills__box">
            <div className="skills__group">

                <div className="skills__data">
                    <i></i>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i></i>
                    <div>
                        <h3 className="skills__name">Bootstrap</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

            </div>
            
            <div className="skills__group">

                <div className="skills__data">
                    <i></i>
                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Moderate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i></i>
                    <div>
                        <h3 className="skills__name">Javascript</h3>
                        <span className="skills__level">Moderate</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Frontend