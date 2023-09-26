import { useState } from "react";

export const useUpdateForm = (initialFormValues) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const changeHandler = ({ target: { id: inputId, value } }) => {
    setFormValues((prevFormValues) => {
      return {
        ...prevFormValues,
        [inputId]: value,
      };
    });
  };

  return [formValues, changeHandler];
};
