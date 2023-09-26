import { Container } from "react-bootstrap";
import { icons } from "../constants/icons";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";

const Registro = ({ feedback, updateFeedback }) => {
  return (
    <Container
      fluid
      style={{ maxWidth: "25rem" }}
      className="d-flex flex-column gap-3 text-center p-5 rounded-5 border border-2 border-light-subtle bg-light"
    >
      <h1 className="mb-0">Usa una cuenta</h1>
      <div className="d-flex m-0 p-0 w-100 justify-content-center gap-3">
        {icons.map(({ id, icon }) => (
          <SocialButton key={id} icon={icon} />
        ))}
      </div>
      <p className="mb-0">O usa tu email para registrarte</p>
      <Formulario feedback={feedback} updateFeedback={updateFeedback} />
      {feedback.isShowing && <Alert {...feedback} />}
    </Container>
  );
};

export default Registro;
