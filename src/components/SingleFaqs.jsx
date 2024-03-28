import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Wrapper from '../assets/wrappers/Faqs';
const SingleFaqs = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Wrapper>
      <article className="question" style={{ padding: '0' }}>
        <header style={{ padding: '1rem' }}>
          <h5 style={{ color: 'white' }}>{title}</h5>
          <button
            className="question-btn"
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? (
              <AiOutlineMinus style={{ color: 'black' }} />
            ) : (
              <AiOutlinePlus style={{ color: 'black' }} />
            )}
          </button>
        </header>
        {showInfo && (
          <p style={{ background: 'white', width: '100%', padding: '1rem' }}>
            {info}
          </p>
        )}
      </article>
    </Wrapper>
  );
};

export default SingleFaqs;
