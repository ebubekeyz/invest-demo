import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Investment';
import { FaArrowRight } from 'react-icons/fa';
import Title from '../components/Title';
import { LuBadgeCheck } from 'react-icons/lu';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import { mainFetch } from '../utils';

const InvestmentCard = () => {
  const [invest, setInvest] = useState({
    plan: 'T-H1 Plan',
    amount: 50,
    max: 3000,
    percent: 5,
    days: 1,
  });

  const [invest2, setInvest2] = useState({
    plan: 'T-H2 Plan',
    amount: 3100,
    max: 7000,
    percent: 12,
    days: 2,
  });

  const [invest3, setInvest3] = useState({
    plan: 'T-H3 Plan',
    amount: 7100,
    max: 20000,
    percent: 18,
    days: 3,
  });

  const [invest4, setInvest4] = useState({
    plan: 'T-H4 Plan',
    amount: 20500,
    max: 40000,
    percent: 24,
    days: 4,
  });

  const [invest5, setInvest5] = useState({
    plan: 'T-H STAKE Plan',
    amount: 41000,
    max: 90000,
    percent: 7,
    days: 1,
  });

  const [invest6, setInvest6] = useState({
    plan: 'T-H STAKE2 Plan',
    amount: 91000,
    max: 200000,
    percent: 9.1,
    days: 1,
  });

  const [invest7, setInvest7] = useState({
    plan: 'T-H STAKE3 Plan',
    amount: 201000,
    max: 500000,
    percent: 10,
    days: 1,
  });

  const [invest8, setInvest8] = useState({
    plan: 'T-H4 STAKE4 Plan',
    amount: 501000,
    max: 5000000,
    percent: 25,
    days: 1,
  });

  const nav = useNavigate();

  const handleInvest = async (e) => {
    e.preventDefault();

    try {
      const response = await mainFetch.post(
        '/api/v1/invest',
        {
          plan: invest.plan,
          amount: invest.amount,
          max: invest.max,
          percent: invest.percent,
          days: invest.days,
        },
        { withCredentials: true }
      );
      console.log(response.data.invest);

      nav('/deposit');
    } catch (error) {
      nav('/login');
      console.log(error);
      console.log(error.response.data.msg);
    }
  };

  const handleInvest2 = async (e) => {
    e.preventDefault();

    try {
      const response = await mainFetch.post(
        '/api/v1/invest',
        {
          plan: invest2.plan,
          amount: invest2.amount,
          max: invest2.max,
          percent: invest2.percent,
          days: invest2.days,
        },
        { withCredentials: true }
      );
      console.log(response.data.invest);

      nav('/deposit');
    } catch (error) {
      nav('/login');
      console.log(error);
      console.log(error.response.data.msg);
    }
  };

  const handleInvest3 = async (e) => {
    e.preventDefault();

    try {
      const response = await mainFetch.post(
        '/api/v1/invest',
        {
          plan: invest3.plan,
          amount: invest3.amount,
          max: invest3.max,
          percent: invest3.percent,
          days: invest3.days,
        },
        { withCredentials: true }
      );
      console.log(response.data.invest);

      nav('/deposit');
    } catch (error) {
      nav('/login');
      console.log(error);
      console.log(error.response.data.msg);
    }
  };

  const handleInvest4 = async (e) => {
    e.preventDefault();

    try {
      const response = await mainFetch.post(
        '/api/v1/invest',
        {
          plan: invest4.plan,
          amount: invest4.amount,
          max: invest4.max,
          percent: invest4.percent,
          days: invest4.days,
        },
        { withCredentials: true }
      );
      console.log(response.data.invest);

      nav('/deposit');
    } catch (error) {
      nav('/login');
      console.log(error);
      console.log(error.response.data.msg);
    }
  };

  const handleInvest5 = async (e) => {
    e.preventDefault();

    try {
      const response = await mainFetch.post(
        '/api/v1/invest',
        {
          plan: invest5.plan,
          amount: invest5.amount,
          max: invest5.max,
          percent: invest5.percent,
          days: invest5.days,
        },
        { withCredentials: true }
      );
      console.log(response.data.invest);

      nav('/deposit');
    } catch (error) {
      nav('/login');
      console.log(error);
      console.log(error.response.data.msg);
    }
  };

  const handleInvest6 = async (e) => {
    e.preventDefault();

    try {
      const response = await mainFetch.post(
        '/api/v1/invest',
        {
          plan: invest6.plan,
          amount: invest6.amount,
          max: invest6.max,
          percent: invest6.percent,
          days: invest6.days,
        },
        { withCredentials: true }
      );
      console.log(response.data.invest);

      nav('/deposit');
    } catch (error) {
      nav('/login');
      console.log(error);
      console.log(error.response.data.msg);
    }
  };

  const handleInvest7 = async (e) => {
    e.preventDefault();

    try {
      const response = await mainFetch.post(
        '/api/v1/invest',
        {
          plan: invest7.plan,
          amount: invest7.amount,
          max: invest7.max,
          percent: invest7.percent,
          days: invest7.days,
        },
        { withCredentials: true }
      );
      console.log(response.data.invest);

      nav('/deposit');
    } catch (error) {
      nav('/login');
      console.log(error);
      console.log(error.response.data.msg);
    }
  };

  const handleInvest8 = async (e) => {
    e.preventDefault();

    try {
      const response = await mainFetch.post(
        '/api/v1/invest',
        {
          plan: invest8.plan,
          amount: invest8.amount,
          max: invest8.max,
          percent: invest8.percent,
          days: invest8.days,
        },
        { withCredentials: true }
      );
      console.log(response.data.invest);

      nav('/deposit');
    } catch (error) {
      nav('/login');
      console.log(error);
      console.log(error.response.data.msg);
    }
  };
  return (
    <Wrapper>
      <section>
        <div>
          <Title title="Pricing plans" text="" />
        </div>

        <aside className="invest">
          <article>
            <h3>{invest.plan}</h3>

            <LuBadgeCheck className="badge" />

            <div className="percent-main">
              <div className="percent">
                <span>€</span>
                <h1 className="change-color">
                  {invest.amount}
                  <span className="percent-inner" style={{ fontSize: '1rem' }}>
                    Min
                  </span>
                </h1>
              </div>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Easy to use</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Affiliate Com 10%</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>{invest.percent}% ROI Daily</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>€3,000 Maximum</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Duration : 24Hrs</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <button onClick={handleInvest} className="btn">
              INVEST NOW
            </button>
          </article>

          <article>
            <h3>{invest2.plan}</h3>

            <LuBadgeCheck className="badge" />

            <div className="percent-main">
              <div className="percent">
                <span>€</span>
                <h1>
                  {invest2.amount}
                  <span className="percent-inner" style={{ fontSize: '1rem' }}>
                    Min
                  </span>
                </h1>
              </div>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Easy to use</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Affiliate Com 12%</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>{invest2.percent}% ROI Daily</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>€7,000 Maximum</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Duration : 2 Days</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <button onClick={handleInvest2} className="btn">
              INVEST NOW
            </button>
          </article>

          <article>
            <h3>T-H3 Plan</h3>

            <LuBadgeCheck className="badge" />

            <div className="percent-main">
              <div className="percent">
                <span>€</span>
                <h1 className="change-color">
                  7,100
                  <span className="percent-inner" style={{ fontSize: '1rem' }}>
                    Min
                  </span>
                </h1>
              </div>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Easy to use</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Affiliate Com 10%</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>18% ROI Daily</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>€20,000 Maximum</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Duration : 72Hrs</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <button onClick={handleInvest3} className="btn">
              INVEST NOW
            </button>
          </article>

          <article>
            <h3>T-H4 Plan</h3>

            <LuBadgeCheck className="badge" />

            <div className="percent-main">
              <div className="percent">
                <span>€</span>
                <h1>
                  20,500
                  <span className="percent-inner" style={{ fontSize: '1rem' }}>
                    Min
                  </span>
                </h1>
              </div>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Easy to use</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Affiliate Com 10%</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>24% ROI Daily</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>€40,000 Maximum</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>Duration : 96Hrs</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <button onClick={handleInvest4} className="btn">
              INVEST NOW
            </button>
          </article>
        </aside>
      </section>

      <section>
        <div>
          <Title title="Partnership Plans (Apex Investors Grade)" text="" />
        </div>

        <aside className="invest">
          <article>
            <h3>T-H STAKE1 Plan</h3>

            <LuBadgeCheck className="badge" />

            <div className="percent-main">
              <div className="percent">
                <span>€</span>
                <h1 className="change-color">
                  41,000
                  <span className="percent-inner" style={{ fontSize: '1rem' }}>
                    Min
                  </span>
                </h1>
              </div>
            </div>

            <div className="check-main">
              <p className="split">
                <span>7% ROI Daily</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>€90,000 Maximum</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <button onClick={handleInvest5} className="btn">
              INVEST NOW
            </button>
          </article>

          <article>
            <h3>T-H STAKE2 Plan</h3>

            <LuBadgeCheck className="badge" />

            <div className="percent-main">
              <div className="percent">
                <span>€</span>
                <h1 className="change-color">
                  91,000
                  <span className="percent-inner" style={{ fontSize: '1rem' }}>
                    Min
                  </span>
                </h1>
              </div>
            </div>

            <div className="check-main">
              <p className="split">
                <span>9.5% ROI AFTER 15HRS</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>€200,000 Maximum</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <button onClick={handleInvest6} className="btn">
              INVEST NOW
            </button>
          </article>

          <article>
            <h3>T-H STAKE3 Plan</h3>

            <LuBadgeCheck className="badge" />

            <div className="percent-main">
              <div className="percent">
                <span>€</span>
                <h1 className="change-color">
                  201,000
                  <span className="percent-inner" style={{ fontSize: '1rem' }}>
                    Min
                  </span>
                </h1>
              </div>
            </div>

            <div className="check-main">
              <p className="split">
                <span>10% ROI AFTER 12 HRS</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>€500,000 Maximum</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <button onClick={handleInvest7} className="btn">
              INVEST NOW
            </button>
          </article>

          <article>
            <h3>T-H STAKE4 Plan</h3>

            <LuBadgeCheck className="badge" />

            <div className="percent-main">
              <div className="percent">
                <span>€</span>
                <h1 className="change-color">
                  501,000
                  <span className="percent-inner" style={{ fontSize: '1rem' }}>
                    Min
                  </span>
                </h1>
              </div>
            </div>

            <div className="check-main">
              <p className="split">
                <span>25% ROI AFTER 24HRS</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <div className="check-main">
              <p className="split">
                <span>€5,000,000 Maximum</span>{' '}
                <span className="check-inner">
                  <FaCheck />
                </span>
              </p>
            </div>

            <button onClick={handleInvest8} className="btn">
              INVEST NOW
            </button>
          </article>
        </aside>
      </section>
    </Wrapper>
  );
};
export default InvestmentCard;
