import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";

const SocialButton = ({ icon }) => {
  return (
    <Button
      variant="outline-dark"
      className="d-flex align-items-center justify-content-center rounded-circle"
      style={{ width: "5em", height: "5em" }}
    >
      <FontAwesomeIcon icon={icon} size="xl" />
    </Button>
  );
};

export default SocialButton;
