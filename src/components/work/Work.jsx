import './work.css'

import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Image3,
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];

const Work = () => {
  return (
    <section className='work container section' id='work'>
      <h2 className="section__title"> Projects </h2>
      <div className="work_container grid">
        {data.map(({id, image, title, description}) => {
          return(
            <div className="work__card" key={id}>
              <img src={image} alt="" className="work__img" />
              <h3 className="work__title">{title}</h3>
              <p className="work__description">{description}</p>  
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Work