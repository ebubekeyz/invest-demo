import Hero2 from '../components/Hero2';
import { nanoid } from 'nanoid';
import img from '../assets/investment.jpg';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Investment';
import InvestmentCard from '../components/InvestmentCard';
import Title2 from '../components/Title2';
import Know from '../components/Know';

const Investment = () => {
  return (
    <>
      <Hero2
        name=""
        title="Investment Plan"
        id={nanoid()}
        quote="Our Proficiency. Learn more about our activities."
        image={img}
      />
      <InvestmentCard />
      <Title2
        title="Objective of the Fund"
        text="The fund's goal is to surpass gold as a long-term benchmark. It intends to achieve this by employing margin lending and arbitrage strategies to generate a yield exceeding the gold spot price. Providing investors with an innovative, cost-effective, and secure means of gaining exposure to the gold market, the fund will hold cryptoasset gold tokens, specifically Tether Gold (XAUT) and PAX Gold (PAXG), with a minor portion invested in the Margin Lending Fund."
      />
      <Know />
    </>
  );
};
export default Investment;
