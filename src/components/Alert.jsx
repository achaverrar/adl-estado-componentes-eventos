import BAlert from "react-bootstrap/Alert";
import ErrorList from "./ErrorList";

const Alert = ({ resultConfiguration: { variant, message }, errors }) => {
  return (
    <BAlert variant={variant} className="mb-0">
      <p className="mb-0 fw-bold">{message}</p>
      {!!errors.length && <ErrorList errors={errors} />}
    </BAlert>
  );
};

export default Alert;
