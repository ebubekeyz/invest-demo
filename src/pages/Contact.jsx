import Wrapper from '../assets/wrappers/Contact';
import Hero2 from '../components/Hero2';

import img from '../assets/faqs.jpg';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { mainFetch } from '../utils';

const Contact = () => {
  const [isLoading, setIsLoading] = useState('Send Message');
  const [contact, setContact] = useState({
    name: '',
    email: '',
    enquiryType: '',
    enquiryDescription: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading('Sending...');
      const response = await mainFetch.post(
        '/api/v1/contact',
        {
          name: contact.name,
          email: contact.email,
          enquiryType: contact.enquiryType,
          enquiryDescription: contact.enquiryDescription,
        },
        { withCredentials: true }
      );
      setIsLoading('Message Sent');
      setContact({
        name: '',
        email: '',
        enquiryType: '',
        enquiryDescription: '',
      });

      toast.success('Message sent successfully');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };
  return (
    <Wrapper>
      <div>
        <Hero2
          name=""
          title="Contact Us"
          id={nanoid()}
          quote="trexholding539@gmail.com"
          image={img}
        />

        <aside
          style={{
            margin: '0 auto',
            width: '90vw',
            maxWidth: '1170px',
            marginTop: '4rem',
          }}
        >
          <article>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'var(--primary-600)',
              }}
            >
              Let's discuss your investment and explore ways to bring it to
              fruition.
            </h2>
            <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
              Let's delve into your investment and explore the possibilities of
              realizing it.
            </p>
          </article>

          <form
            onSubmit={handleSubmit}
            style={{
              background: 'white',
              boxShadow: 'var(--shadow-4)',
              padding: '3rem 2rem',
              marginBottom: '4rem',
            }}
          >
            <h1
              style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: 'var(--primary-400)',
                marginBottom: '2rem',
              }}
            >
              Require help? Kindly complete the form for assistance.
            </h1>

            <input
              type="text"
              className="form-input"
              placeholder="Name"
              name="name"
              value={contact.name}
              onChange={(e) => {
                setContact({
                  ...contact,
                  [e.target.name]: e.target.value,
                });
              }}
            />

            <input
              type="text"
              className="form-input"
              placeholder="Email Address"
              name="email"
              value={contact.email}
              onChange={(e) => {
                setContact({
                  ...contact,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <input
              type="text"
              className="form-input"
              placeholder="Enquiry Type"
              name="enquiryType"
              value={contact.enquiryType}
              onChange={(e) => {
                setContact({
                  ...contact,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <textarea
              type="text"
              className="form-input"
              placeholder="Enquiry Description"
              name="enquiryDescription"
              value={contact.enquiryDescription}
              onChange={(e) => {
                setContact({
                  ...contact,
                  [e.target.name]: e.target.value,
                });
              }}
              style={{ height: '10rem', marginBottom: '1rem' }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '10% 90%',
                alignItems: 'center',
                gap: '1px',
              }}
            >
              <input type="checkbox" name="agree" value="false" />
              <span style={{ color: 'var(--grey-400)' }}>
                I consent to discussing my investment with trexholding.com.
              </span>
            </div>

            <button
              type="submit"
              className="btn contact-btn"
              style={{
                background: 'var(--primary-500)',
                borderRadius: '2rem',
                color: 'white',
                width: '10rem',
                margin: '0 auto',
                fontWeight: '700',
                padding: '1rem 1rem',
                marginTop: '2rem',
              }}
            >
              {isLoading}
            </button>
          </form>
        </aside>
      </div>
    </Wrapper>
  );
};
export default Contact;
