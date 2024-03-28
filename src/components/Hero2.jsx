import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { FaQuoteRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero2 = ({ image, name, title, quote, id }) => {
  return (
    <section>
      <article key={id} style={{ width: '100%' }}>
        <div className="main-container">
          <img
            src={image}
            alt={name}
            style={{ width: '100%', height: '70vh', objectFit: 'cover' }}
          />

          <div className="info" style={{ padding: '0 2rem' }}>
            <h2 className="title">{title}</h2>
            <p className="text" style={{ textAlign: 'center', color: 'white' }}>
              {quote}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero2;
