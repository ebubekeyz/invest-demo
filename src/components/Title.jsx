const Title = ({ title, text }) => {
  return (
    <div style={{ textAlign: 'center', margin: '4rem 0' }}>
      <h1
        style={{
          color: 'var(--primary-500',
          fontSize: '2.3rem',
          fontWeight: '700',
          marginBottom: '1.2rem',
        }}
      >
        {title}
      </h1>
      <span style={{ fontWeight: '700', fontSize: '1.2rem' }}>{text}</span>
    </div>
  );
};
export default Title;
