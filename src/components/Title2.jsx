const Title2 = ({ title, text }) => {
  return (
    <div
      style={{
        textAlign: 'center',
        width: '90vw',
        maxWidth: '50rem',
        margin: '4rem auto',
      }}
    >
      <h3
        style={{
          color: 'var(--primary-500',
          fontWeight: '700',
          marginBottom: '1.2rem',
        }}
      >
        {title}
      </h3>

      <p style={{ color: 'var(--grey-600)' }}>{text}</p>
    </div>
  );
};
export default Title2;
