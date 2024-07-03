import './blog.css';
import { IoArrowRedoSharp } from "react-icons/io5";

import BlogOne from '../../assets/blog1.jpg';
import BlogTwo from '../../assets/blog2.jpg';
import BlogThree from '../../assets/blog3.jpg';

const Blog = () => {
  return (
    <section className="blog section" id="blog">
        <h2 className="section__title text-cs"> Latest Blog </h2>
        <p className="section__subtitle">
            My <span> Articles </span>
        </p>

        <div className="blog__container container grid">
            <div className="blog__item card card-two">
                <span className='blog__data text-cs'> MAY 21, 2024</span>
                <h3 className="blog__title"> The Main Thing for the designer</h3>
                <p className="blog__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae unde labore sapiente debitis ad</p>
                <a href="" className='link'>Read More <IoArrowRedoSharp className='link__icon'/> </a>
                <img src={BlogOne} alt="" className='blog__img'/>
            </div>
            
            <div className="blog__item card card-two">
                <span className='blog__data text-cs'> MAY 21, 2024</span>
                <h3 className="blog__title"> The Main Thing for the designer</h3>
                <p className="blog__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae unde labore sapiente debitis ad</p>
                <a href="" className='link'>Read More <IoArrowRedoSharp className='link__icon'/> </a>
                <img src={BlogTwo} alt="" className='blog__img'/>
            </div>
            
            <div className="blog__item card card-two">
                <span className='blog__data text-cs'> MAY 21, 2024</span>
                <h3 className="blog__title"> The Main Thing for the designer</h3>
                <p className="blog__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae unde labore sapiente debitis ad</p>
                <a href="" className='link'>Read More <IoArrowRedoSharp className='link__icon'/> </a>
                <img src={BlogThree} alt="" className='blog__img'/>
            </div>
            
        </div>
    </section>
  )
}

export default Blog