import axios from 'axios';
import { nanoid } from 'nanoid';

export const customFetch = axios.create({
  baseURL: 'http://localhost:5200/api/v1',
});

export const navbarData = [
  { id: nanoid(), url: '/', text: 'Home' },
  { id: nanoid(), url: '/about', text: 'Who we are' },
  { id: nanoid(), url: '/investment', text: 'Investment' },
  { id: nanoid(), url: '/faqs', text: 'Faqs' },
  { id: nanoid(), url: '/contact', text: 'Contact' },
];

export const list = [
  {
    id: nanoid(),
    image: '/hero.jpg',
    name: 'Get Started Now',
    title: 'Welcome to Trexholding',
    quote: 'A completely new approach to investing.',
  },
  {
    id: nanoid(),
    image: '/hero2.jpg',
    name: 'Read more',
    title: 'Create earnings with integrity',
    quote: 'We endorse the expansion of investments in promising innovations.',
  },
];

export const questions = [
  {
    id: nanoid(),
    title:
      'What is the reason behind Trexholding providing investment opportunities to investors?',
    info: 'Trexholding recognizes abundant opportunities in financial markets and aims to make them accessible to everyone. The growing popularity of digital assets has reinforced our standing as a leading platform transforming lives through these assets. Its evident that as the exchange transaction process involves more working capital and attracts increased interest, we move closer to our goals, leading to higher income levels for our customers.',
  },
  {
    id: nanoid(),
    title:
      'What are the mechanisms for generating profit in the company using investors funds?',
    info: 'Trexholding globally receives investments from its clients and consolidates investment funds, meticulously analyzing factors that may impact specific exchange transactions. Upon generating profits, we distribute them among clients based on a predetermined percentage of profitability, while the remaining profit is utilized at our discretion.',
  },
  {
    id: 3,
    title: 'Is Trexholding a registered and authorized trading company?',
    info: 'Certainly, Trexholding is a lawfully registered company with the Financial Industry Regulatory Authority. Furthermore, Trexholding is subject to regulation by the Australia Securities and Exchange Commission (SEC) and is incorporated in the state of Victoria',
  },
  {
    id: nanoid(),
    title: 'How do I sign up to commence earning?',
    info: 'To begin earning, click on the sign-up button for free registration with the company. Select an investment package within your budget, enter the desired starting amount on the website, and make the payment by transferring to the companys wallet address. Complete the deposit process by clicking save and await approval from the company. Once your deposit is verified, we will approve it, activate your dashboard for earning, and adhere to the agreed-upon schedule for the selected investment package.',
  },
  {
    id: nanoid(),
    title:
      'How long does it take for withdrawals to be credited to the wallet?',
    info: 'Withdrawals are processed instantly. Once the company receives your withdrawal request, the specified amount is automatically transferred directly to your registered Bitcoin or Ethereum wallet address. The amount reflects in your wallet back office shortly after undergoing a 3 to 4 confirmation process by the blockchain service.',
  },
  {
    id: nanoid(),
    title: 'Is participation open to individuals from any country?',
    info: 'To avail oneself of our investment opportunity, one must be a minimum of 18 years old and must have agreed to our Terms of Service. Regardless of your location, as long as you have an internet connection, you are eligible to participate.',
  },
  {
    id: nanoid(),
    title:
      'What are the primary activities that enable you to generate such interest?',
    info: 'We engage in high-value asset investments through in-depth analysis, market forensics, and advanced technology. Our experts yield high returns owing to our exceptional strategies. Leveraging Bitcoin and Ethereum mining volumes, coupled with cutting-edge technology, enables us to offer interest rates higher than the market average. Global expansion accelerates our growth, and to maintain our status as one of the worlds top BTC/ETH mining companies, we adhere to modern technology standards and concepts. The consistent and purposeful teamwork allows us to provide lucrative interest to our clients.',
  },
  {
    id: nanoid(),
    title: 'What is your proposition? How much can I expect to earn?',
    info: 'The fundamental idea behind our investment plan is that you will earn daily interest depending on the activated/chosen investment plan. After your deposit is credited to your account, interest will be accrued to your account balance each day. Your active deposits are listed in the "Investment List" section of your account, allowing you to withdraw either the full principal or a portion of it. As long as you maintain an active deposit, you will continue to receive interest. Once you withdraw the entire principal, your deposit becomes inactive, and no further interest will be applied.',
  },
  {
    id: nanoid(),
    title: 'What are the minimum and maximum deposit amounts?',
    info: 'The minimum deposit is €50 USD, and the maximum deposit per transaction is €200,000. You can have as many active investments as you desire concurrently.',
  },
  {
    id: nanoid(),
    title:
      'What does the affiliate program entail, and how can I take advantage of its benefits?',
    info: 'The primary idea behind our affiliate program is to offer our members an additional financial opportunity by encouraging them to refer others to our project. Simply share your referral link, found in your account, with others, and you will receive a 10% commission from their deposits credited to your account balance. If you aspire to earn an even higher commission (30%) from your referrals deposits, you can apply for Representative status.',
  },
  {
    id: nanoid(),
    title:
      'What distinguishes the standard affiliate program from the regional representatives program?',
    info: 'Kindly review our plans to explore the available offers. Feel free to reach out to our support team for further assistance.',
  },
  {
    id: nanoid(),
    title: 'How can I become a representative?',
    info: 'To qualify as a Regional Representative for Digital Capital Markets, you need the capability to endorse and advocate for our project in your region through various means, such as maintaining a personal blog, conducting online/offline presentations, and organizing client meetings. For application, please send an email to support@trex-holding.com',
  },
  {
    id: nanoid(),
    title: 'Why is my account currently inactive?',
    info: 'If your account is inactive, its possible that you may have violated one of our terms or services. Please reach out to our support team for assistance in resolving this issue.',
  },
];

export const coinFetch = axios.create({
  baseURL: 'https://invest-demo-server.onrender.com',
  headers: {
    Accept: 'application/json',
  },
});
// export const coinFetch = axios.create({
//   baseURL: 'http://localhost:5200',
//   headers: {
//     Accept: 'application/json',
//   },
// });

export const mainFetch = axios.create({
  baseURL: 'https://invest-demo-server.onrender.com',
  headers: {
    Accept: 'application/json',
  },
});
// export const mainFetch = axios.create({
//   baseURL: 'http://localhost:5200',
//   headers: {
//     Accept: 'application/json',
//   },
// });
