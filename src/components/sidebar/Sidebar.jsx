import './sidebar.css';
import Logo from '../../assets/icons8-s-64.png';
import { useState } from 'react';

const Sidebar = () => {

  const[toggle, showMenu] = useState(false);

  return (
    <>
    <aside className={toggle ? "aside show-menu" : "aside"}>
      <a href="#home" className="nav__logo"> 
      <img src={Logo} alt="logo" />
      </a>

      <nav className='nav'> 
        <div className="nav__menu">
          <ul className="nav__list">

            <li className="nav__item">
              <a href="#home" className="nav__link">
              <i className="icon-home"></i>
              </a>
            </li>
            
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-user"></i>
              </a>
            </li>
            
            <li className="nav__item">
              <a href="#work" className="nav__link">
                <i className="icon-rocket"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="icon-doc"></i>
              </a>
            </li>
            
            
            <li className="nav__item">
              <a href="#blog" className="nav__link">
                <i className="icon-pencil"></i>
              </a>
            </li>
            
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-phone"></i>
              </a>
            </li>

          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright"> &copy; 2024-2025. </span>
      </div>
    </aside>

    <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() =>showMenu(!toggle)} >
      <i className="icon-menu"></i>
    </div>
    </>
  )
}

export default Sidebar