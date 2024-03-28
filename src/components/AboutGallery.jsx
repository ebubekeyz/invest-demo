import Wrapper from '../assets/wrappers/AboutPage';
import image1 from '../assets/abt1.jpg';
import image2 from '../assets/abt2.jpg';
import image3 from '../assets/abt3.jpg';

const AboutGallery = () => {
  return (
    <Wrapper>
      <div className="about-gal">
        <article className="gal">
          <img src={image1} alt="abt1" className="abt-img" />
          <h4>CREATING VALUE FOR INVESTORS</h4>
          <p>
            Value creation for investors that challenges and disrupts the
            traditional, thereby creating a new way of investing.
          </p>
        </article>
        <article className="gal">
          <img src={image2} alt="abt2" className="abt-img" />
          <h4>COMPLETE TRANSPARENCY</h4>
          <p>
            Ensuring transparency in investors interests while maintaining high
            levels of privacy with transaction details.
          </p>
        </article>
        <article className="gal">
          <img src={image3} alt="abt3" className="abt-img" />
          <h4>SCIENTIFIC & DATA-DRIVEN APPROACH</h4>
          <p>
            An intelligent, scientific approach where data is optimized to
            simplify investment decisions.
          </p>
        </article>
      </div>
    </Wrapper>
  );
};
export default AboutGallery;
