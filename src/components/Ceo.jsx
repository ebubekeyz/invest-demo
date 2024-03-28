import img from '../assets/changpeng-zhao.jpg';
import Wrapper from '../assets/wrappers/Ceo';

function Ceo() {
  return (
    <Wrapper>
      <section className="about-section">
        <div className="about-center section-center">
          <div className="about-img">
            <img src={img} className="about-photo" alt="" />
          </div>

          <article className="about-text">
            <div className="section-title about-title">
              <h3>Changpeng Zhao</h3>
            </div>
          </article>
        </div>
      </section>
    </Wrapper>
  );
}
export default Ceo;
