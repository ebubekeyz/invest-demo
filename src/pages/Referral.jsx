import Hero2 from '../components/Hero2';
import img from '../assets/referral.jpg';
import { nanoid } from 'nanoid';
import AboutGallery from '../components/AboutGallery';
import Title2 from '../components/Title2';
import ref from '../assets/referral2.jpg';
import { FaRegEye } from 'react-icons/fa6';
import { RiGpsLine } from 'react-icons/ri';
import Wrapper from '../assets/wrappers/Referral';

const Referral = () => {
  return (
    <Wrapper>
      <div>
        <Hero2
          name=""
          title="Affliate Program"
          id={nanoid()}
          quote="Achieving success is not overly challenging. A substantial portion of the population both desires and requires success."
          image={img}
        />

        <div className="ref-text">
          <article>
            <h3>What You'll Receive as an Affiliate Partner</h3>
            <p>
              Generate unlimited commissions through the trexholding Affiliate
              Program. Increase your income by receiving a percentage from the
              purchases made by your referrals.
            </p>
          </article>

          <article>
            <div className="ref-num">
              <span>01</span>
              <div className="ref-num-inner">
                <h4>Join Our Program</h4>
                <p>
                  Upon signing up, you will receive a personalized link to share
                  with your friends. Click "Join Now" below and start earning in
                  just a few clicks.
                </p>
              </div>
            </div>

            <div className="ref-num">
              <span>02</span>
              <div className="ref-num-inner">
                <h4>Promote</h4>
                <p>
                  Share your referral link everywhere and at any time (don't be
                  selfish). Monetize your traffic using a Tracking Link.
                </p>
              </div>
            </div>

            <div className="ref-num">
              <span>03</span>
              <div className="ref-num-inner">
                <h4>Earn</h4>
                <p>
                  Receive up to a 10% commission. Earn from ALL products with
                  your 30-day cookie, not limited to those you specifically
                  advertise.
                </p>
              </div>
            </div>
          </article>
        </div>

        <Title2
          title="Diversity coupled with innovative collaboration."
          text="We are a company fueled by creativity, working with passion and love to deliver the finest services you require. Our commitment is to assist you in improvement, taking pride in helping our clients achieve remarkable results in their investments."
        />

        <div className="information">
          <article className="info-inner1">
            <div className="ref-inner">
              <FaRegEye style={{ fontSize: '2rem' }} />
              <h4
                style={{
                  fontWeight: '700',
                  fontSize: '2rem',
                }}
              >
                Our Vision
              </h4>
            </div>

            <p style={{ color: 'white' }}>
              Investors face challenges such as high administrative costs,
              unnecessary intermediaries, slow execution, and limited
              transparency. At trex-holding, we believe that blockchain
              technology will revolutionize this industry, providing significant
              benefits to investors worldwide.
            </p>
          </article>

          <article className="info-inner2">
            <div className="ref-inner">
              <RiGpsLine style={{ fontWeight: '700', fontSize: '2rem' }} />
              <h4 style={{ fontWeight: '700' }}>Our Mission</h4>
            </div>

            <p style={{ color: 'white' }}>
              We envision a future of finance that differs significantly from
              its current state, and we provide eligible investors with the
              opportunity to invest in companies and products that are shaping
              the future of finance.
            </p>
          </article>
        </div>

        <div>
          <img
            src={ref}
            alt="referral banner"
            style={{ height: '20rem', marginTop: '2rem' }}
          />
        </div>

        <Title2
          title="Three reasons why you should choose our service"
          text=""
        />

        <AboutGallery />
      </div>
    </Wrapper>
  );
};
export default Referral;
