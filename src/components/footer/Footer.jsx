import './footer.css';
import { FaGithub,FaLinkedinIn,FaDev } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/shreyam-kanaujiya/" className="footer__socials-link" target='_blank'>
                <FaLinkedinIn /> 
                </a>
                <a href="https://app.daily.dev/shrey_" className="footer__socials-link" target='_blank'>
                <FaDev /> 
                </a>
                <a href="https://github.com/shreyam91" className="footer__socials-link" target='_blank'>
                <FaGithub /> 
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