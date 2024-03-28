import Hero2 from '../components/Hero2';
import { nanoid } from 'nanoid';
import img from '../assets/about.jpg';
import Title2 from '../components/Title2';
import img2 from '../assets/cert.jpg';
import Wrapper from '../assets/wrappers/AboutPage';
import { FaCheck } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

import Know from '../components/Know';
import AboutGallery from '../components/AboutGallery';
import { useEffect, useState } from 'react';
import { mainFetch } from '../utils';

const About = () => {
  return (
    <Wrapper>
      <div>
        <Hero2
          name=""
          title="About trexholding"
          id={nanoid()}
          quote="Learn more about our activities."
          image={img}
        />

        <Title2
          title="
Trexholding is a licensed broker-dealer that specializes in private securities."
          text="Collaborating with us involves a sophisticated process of seamlessly integrating each client into Trexholding's distinctive investor community. This aims to enhance the financial stability of every individual and secure a consistent profit without risking capital. We transcend being just a trading company; Trexholding serves as a tool enabling everyone to realize their potential through investments based on our cutting-edge technologies.

We extend attractive collaboration terms to our partners, granting them the right to use our company's brand, employing a well-established business algorithm, and offering comprehensive support from our team of specialists. These favorable conditions for investing in our rapidly growing company make it effortless for you to attract potential clients for collaboration.

Our objective is to furnish all parties with the necessary information, ensuring a seamless progression in our transactions from the pre-marketing phase to closure. By handling compliance functions, we enable you to focus on your deals with ease."
        />

        <aside>
          <a href={img2} target="_blank">
            <img src={img2} alt="certificate" className="cert" />
          </a>
          <article className="facts">
            <h3>FAST FACTS</h3>

            <ul className="list">
              <li>
                <span>
                  <FaCheck style={{ color: 'red' }} />
                </span>
                A brokerage firm established and operating since 2014.
                <span></span>
              </li>
              <li>
                <span>
                  <FaCheck style={{ color: 'red' }} />
                </span>
                <span>
                  {' '}
                  Managed more than 1000 successful transactions in private
                  dealings, with values spanning from $1 million to over $100
                  million.
                </span>
              </li>
              <li>
                <span>
                  <FaCheck style={{ color: 'red' }} />
                </span>
                <span>
                  {' '}
                  Specialized in facilitating capital raises, exploring M&A
                  opportunities, and overseeing secondary sales of private
                  stock.
                </span>
              </li>
              <li>
                <span>
                  <FaCheck style={{ color: 'red' }} />
                </span>
                <span>Officially registered in 12 states and territories.</span>
              </li>
              <li>
                <span>
                  <FaCheck style={{ color: 'red' }} />
                </span>
                <span>
                  Based in Massachusetts, with registered representatives
                  operating in certain countries.
                </span>
              </li>
            </ul>
          </article>
        </aside>

        <Title2
          title="Achieving outcomes."
          text="We stand as one of the premier global firms specializing in private multi-asset alternative investments."
        />

        <aside>
          <article>
            <div className="others">
              <h2>99%</h2>
              <p>
                An entirely innovative approach to expanding your investment.
              </p>
              <p style={{ borderBottom: '2px solid #e9e9e9' }}></p>
            </div>

            <div className="others">
              <h2>Increased</h2>
              <p>
                A platform for capital investment that has received prestigious
                awards.
              </p>
              <p style={{ borderBottom: '2px solid #e9e9e9' }}></p>
            </div>

            <div className="others">
              <h2>Improved</h2>
              <p>We are enhancing the value of your investment.</p>
              <p style={{ borderBottom: '2px solid #e9e9e9' }}></p>
            </div>
          </article>

          <article>
            <p>
              At Trexholding, we take pride in inquiring, strategizing, and
              innovating to build something meaningful from scratch. We are a
              collective of entrepreneurs, inventors, scientists, and engineers
              actively shaping the future of finance within a collaborative and
              dynamic environment.
            </p>

            <div>
              <div className="facts">
                <h3>The platform provided by Trexholding.</h3>
                <ul className="list">
                  <li>
                    <span>
                      <FaCheck style={{ color: 'red' }} />
                    </span>
                    Developed by brokers, for brokers.<span></span>
                  </li>
                  <li>
                    <span>
                      <FaCheck style={{ color: 'red' }} />
                    </span>
                    <span>Model based on independent contractors.</span>
                  </li>
                  <li>
                    <span>
                      <FaCheck style={{ color: 'red' }} />
                    </span>
                    <span>
                      {' '}
                      Our proprietary software accommodates various private
                      placement deal types.
                    </span>
                  </li>
                  <li>
                    <span>
                      <FaCheck style={{ color: 'red' }} />
                    </span>
                    <span>
                      The chaperone service facilitates foreign placement agents
                      in presenting mandates to US institutional investors.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="facts">
                <h3>Trexholding Transactions from 2014 Onward</h3>
                <ul className="list">
                  <li>
                    <span>
                      <FaCheck style={{ color: 'red' }} />
                    </span>
                    Transaction value exceeding $1 billion.<span></span>
                  </li>
                  <li>
                    <span>
                      <FaCheck style={{ color: 'red' }} />
                    </span>
                    <span>
                      {' '}
                      Over 800 private placement transactions conducted
                      domestically.
                    </span>
                  </li>
                  <li>
                    <span>
                      <FaCheck style={{ color: 'red' }} />
                    </span>
                    <span>
                      {' '}
                      Transaction value exceeding 61 million euros and 39
                      million pounds.
                    </span>
                  </li>
                  <li>
                    <span>
                      <FaCheck style={{ color: 'red' }} />
                    </span>
                    <span>
                      Reps generated commissions surpassing $35 million.
                    </span>
                  </li>
                  <li>
                    <span>
                      <FaCheck style={{ color: 'red' }} />
                    </span>
                    <span>
                      Served over 900 institutional or accredited investors.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </aside>

        <Title2 title="Why opt for Trexholding?" text="Lets begin." />

        <AboutGallery />

        <Know />
      </div>
    </Wrapper>
  );
};
export default About;
