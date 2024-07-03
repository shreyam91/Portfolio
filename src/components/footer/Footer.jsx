import './footer.css';
import { SiLeetcode,SiInstagram,SiFacebook  } from "react-icons/si";


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">

            <div className="footer__socials">
                <a href="" className="footer__socials-link">
                <SiLeetcode /> 
                </a>
                <a href="" className="footer__socials-link">
                <SiInstagram /> 
                </a>
                <a href="" className="footer__socials-link">
                <SiFacebook /> 
                </a>
            </div>

        <p className="footer__copyright text-cs">
            &copy; 2024 <span> </span>. All Rights Reserved.
        </p>
        
        <p className="footer__copyright text-cs">
            Developed by <span>Shreyam</span>
        </p>
        </div>
    </footer>
  )
}

export default Footer