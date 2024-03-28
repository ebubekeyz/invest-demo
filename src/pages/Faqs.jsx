import Wrapper from '../assets/wrappers/Footer';
import { questions } from '../utils';
import SingleFaqs from '../components/SingleFaqs';
import { useOutletContext } from 'react-router-dom';
import FaqsCard from '../components/FaqsCard';
import Hero2 from '../components/Hero2';
import { nanoid } from 'nanoid';
import img from '../assets/faqs.jpg';
import { useState } from 'react';

const Faqs = () => {
  const today = new Date();
  const futureDate = new Date('4/18/2024');

  const getTodayDate = today.getDate();
  const getFutureDate = futureDate.getDate();

  if (getTodayDate === getFutureDate) {
    console.log('hi');
  }

  // const date1 = new Date('3/16/2024');
  // const date2 = new Date('3/16/2024');
  // const date = new Date();

  // const [currentDate, setCurrentDate] = useState(date1);
  // const [futureDate, setFutureDate] = useState(date2);

  // const timeDifference = futureDate.getTime() - currentDate.getTime();

  // const daysDifference = Math.round(timeDifference / (1000 * 3600 * 24));

  // console.log(date.getDate().toLocaleString());

  // if (date == futureDate) {
  //   console.log('hi');
  // }
  // 1 - Feb;
  // 2 - Mar;
  // 3 - April;
  // 4 - May;
  // 5 - June;
  // 6 - July;
  // 7 - August;
  // 8 - Sept;
  // 9 - Oct;
  // 10 - Nov;
  // 11 - Dec;
  // 12 - Jan;
  // const initDate = new Date(2024, 2, 16);
  // const now = Date.now();
  // const difference = now - initDate;
  // const oneDay = 1000 * 60 * 60 * 24;

  // const daySince = Math.floor(difference / oneDay);

  const questions = useOutletContext();

  return (
    <div>
      <Hero2
        name=""
        title="Commonly Asked Questions"
        id={nanoid()}
        quote="Should you have an inquiry not addressed here, feel free to reach out to us."
        image={img}
      />
      <FaqsCard questions={questions} />
    </div>
  );
};
export default Faqs;
