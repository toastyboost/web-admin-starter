import { createEvent, sample, guard } from 'effector';

// import { logIn } from 'features/user';

import { loginValidator, passValidator } from 'lib/validators';

export const submitLogin = createEvent<React.FormEvent<HTMLFormElement>>();

export const loginStore = { name: 'login', validator: loginValidator };

export const passStore = { name: 'pass', validator: passValidator };

export const loginForm = {
  name: 'form',
  fields: [loginStore, passStore],
  submit: submitLogin,
};

// guard({
//   source: sample(loginForm.$values, submitForm),
//   filter: loginForm.$isValid,
//   target: logIn,
// });
