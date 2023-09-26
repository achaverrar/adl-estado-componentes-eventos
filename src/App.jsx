import { useFeedback } from "./hooks/useFeedback";
import { RESULT_CONFIGURATIONS } from "./constants/inputs";
import Registro from "./components/Registro";

const INITIAL_FEEDBACK = {
  isShowing: false,
  message: "",
  variant: "",
  errors: [],
};

function App() {
  const [feedback, updateFeedback] = useFeedback(
    INITIAL_FEEDBACK,
    RESULT_CONFIGURATIONS.SUCCESS,
    RESULT_CONFIGURATIONS.FAILURE
  );
  return (
    <main className="d-flex align-items-center justify-content-center p-3 min-vh-100 w-100">
      <Registro feedback={feedback} updateFeedback={updateFeedback} />
    </main>
  );
}

export default App;
