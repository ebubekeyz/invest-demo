import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { list } from '../utils';

import Slider from 'react-slick';
import { FaQuoteRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {list.map((person) => {
          const { id, name, title, image, quote } = person;
          return (
            <article key={id}>
              <div className="main-container">
                <img src={image} alt={name} className="person-img" />

                <div className="info">
                  <h2 className="title">{title}</h2>
                  <p className="text">{quote}</p>
                  <Link to="/signUp" type="btn" className="btn hero-btn">
                    {name}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </Slider>
    </section>
  );
};

export default Hero;
