import { useState } from "react";

export const useFeedback = (
  initialFeedback,
  successConfiguration,
  failureConfiguration
) => {
  const [feedback, setFeedback] = useState(initialFeedback);

  const updateFeedback = (errors) => {
    setFeedback({
      isShowing: true,
      resultConfiguration: errors.length
        ? failureConfiguration
        : successConfiguration,
      errors,
    });
  };

  return [feedback, updateFeedback];
};
