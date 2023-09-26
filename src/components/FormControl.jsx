import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const FormControl = ({ controlId, label, onChange, ...inputConfig }) => {
  return (
    <FloatingLabel controlId={controlId} label={label}>
      <Form.Control onChange={onChange} {...inputConfig} />
    </FloatingLabel>
  );
};

export default FormControl;
