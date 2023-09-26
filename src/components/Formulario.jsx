import { Button, Form } from "react-bootstrap";
import { useUpdateForm } from "../hooks/useUpdateForm";
import { getErrorMessages } from "../utils/formUtils";
import { inputs } from "../constants/inputs";
import FormControl from "./FormControl";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const Formulario = ({ feedback, updateFeedback }) => {
  const [formValues, changeHandler] = useUpdateForm(INITIAL_STATE);

  const submitHandler = (event) => {
    event.preventDefault();
    updateFeedback(getErrorMessages(formValues));
  };
  return (
    <Form
      className="d-flex flex-column gap-3"
      validated={feedback.isShowing}
      noValidate
      onSubmit={submitHandler}
    >
      {inputs.map(({ id, ...inputConfiguration }) => (
        <FormControl
          key={id}
          onChange={changeHandler}
          controlId={id}
          value={formValues[id]}
          pattern={id === "passwordConfirm" ? formValues.password : undefined}
          {...inputConfiguration}
        />
      ))}
      <Button type="submit" variant="success">
        Registrarse
      </Button>
    </Form>
  );
};

export default Formulario;
