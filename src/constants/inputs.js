const RESULT_CONFIGURATIONS = {
  FAILURE: {
    variant: "danger",
    message: "No fue posible hacer el registro 😕",
  },
  SUCCESS: {
    variant: "success",
    message: "¡Registro exitoso! 😊",
  },
};

const inputs = [
  {
    id: "name",
    label: "Nombre",
    type: "text",
    placeholder: "Ingrese su nombre",
    pattern: `\\s*(\\S\\s*){3,}`,
    required: true,
  },
  {
    id: "email",
    label: "Correo",
    type: "email",
    placeholder: "tuemail@ejemplo.com",
    required: true,
  },
  {
    id: "password",
    label: "Contraseña",
    type: "password",
    placeholder: "Contraseña",
    required: true,
    minLength: 8,
  },
  {
    id: "passwordConfirm",
    label: "Confirma tu contraseña",
    type: "password",
    placeholder: "Confirma tu contraseña",
    required: true,
    minLength: 8,
  },
];

export { RESULT_CONFIGURATIONS, inputs };
