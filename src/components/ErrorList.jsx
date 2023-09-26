const ErrorList = ({ errors }) => {
  return (
    <ul className="text-start mb-0">
      {errors.map(([key, error]) => {
        return <li key={key}>{error}</li>;
      })}
    </ul>
  );
};

export default ErrorList;
