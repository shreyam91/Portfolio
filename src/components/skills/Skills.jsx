import { SiTicktick } from "react-icons/si";

import './skills.css';
import shapeOne from '../../assets/shape-1.png';

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className="section__title text-cs"> Professional Skills</h2>
        <p className="section__subtitle">
            My <span> Skills </span>
        </p>

      <div class="grid-container container">
        <div class="box">
            <h2 className='tech text-cs'>Frontend Developer</h2>
          <div class="box-content grid-container-box">
            <p> <SiTicktick />  HTML</p>
            <p> <SiTicktick /> CSS</p>
            <p> <SiTicktick />  React</p>
            <p> <SiTicktick />  Bootstrap</p>
            <p> <SiTicktick />  Tailwind CSS</p>
          </div>
        </div>

        <div class="box">
            <h2 className='tech text-cs'>Backend Developer</h2>
          <div class="box-content grid-container-box skill_para">
            {/* <p className='skill'>  */}
             <p ><SiTicktick />  JAVA</p>
            <p><SiTicktick />  Node JS</p>
            <p><SiTicktick />  JavaScript</p>
            
            {/* </p> */}
          </div>
        </div>

        <div class="box">
            <h2 className='tech text-cs'>DataBase</h2>
          <div class="box-content grid-container-box">
            <p><SiTicktick /> SQL</p>
            <p><SiTicktick /> MongoDB</p>
            <p><SiTicktick /> MySQL</p>
          </div>
        </div>

        <div class="box">
            <h2 className='tech text-cs'>Other</h2>
          <div class="box-content grid-container-box">
            <p><SiTicktick /> Git</p>
            <p><SiTicktick /> Firebase</p>
            <p><SiTicktick /> VS Code</p>
            <p><SiTicktick /> Rest API</p>
            <p><SiTicktick /> Postman</p>
          </div>
        </div>

      </div>

        <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className='shape'/>
        </div>

    </section>
  )
}

export default Skills