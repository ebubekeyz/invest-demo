import { FaWhatsappSquare } from 'react-icons/fa';

const Whatsapp = () => {
  return (
    <a href="https://wa.link/qe02c0" target="_blank">
      <FaWhatsappSquare
        style={{
          fontSize: '4rem',
          zIndex: '5',
          color: 'var(--primary-500)',
          position: 'fixed',
          top: '80%',
          left: '8%',
        }}
      />
    </a>
  );
};
export default Whatsapp;
