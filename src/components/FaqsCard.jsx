import SingleFaqs from './SingleFaqs';
import { questions } from '../utils';
import Wrapper from '../assets/wrappers/Faqs';

const FaqsCard = () => {
  return (
    <Wrapper>
      <section className="container">
        {questions.map((question) => {
          return <SingleFaqs key={question.id} {...question}></SingleFaqs>;
        })}
      </section>
    </Wrapper>
  );
};
export default FaqsCard;
