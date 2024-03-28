import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
  const error = useRouteError();

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <h2>{error.message}</h2>
    </div>
  );
};
export default SinglePageError;
