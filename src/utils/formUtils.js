export function getErrorMessages(formValues) {
  const errors = [];

  Object.entries(validators).forEach(([inputName, validateFn]) => {
    const errorMessage = validateFn(formValues);
    if (errorMessage) {
      errors.push([inputName, errorMessage]);
    }
  });

  return errors;
}

const validators = {
  name: validateName,
  email: validateEmail,
  password: validatePassword,
  passwordConfirm: validatePasswordConfirm,
};

function validateName({ name }) {
  if (!isLongEnough(name, 3)) {
    return "El nombre debe tener al menos 3 caracteres que no sean espacios";
  }
}

function validateEmail({ email }) {
  const EMAIL_REGEXP = new RegExp(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  if (!isLongEnough(email)) {
    return "Debe ingresar un email";
  }
  if (!EMAIL_REGEXP.test(email)) {
    return "El email debe tener un formato válido";
  }
}

function validatePassword({ password }) {
  if (!isLongEnough(password, 8)) {
    return "La constraseña debe tener al menos 8 caracteres";
  }
}

function validatePasswordConfirm({ password, passwordConfirm }) {
  if (!isLongEnough(passwordConfirm)) {
    return "Debe repetir su contraseña";
  }
  if (password !== passwordConfirm) {
    return "Las contraseñas deben coincidir";
  }
}

function isLongEnough(text, numCharacters = 1) {
  return text.trim().length >= numCharacters;
}
