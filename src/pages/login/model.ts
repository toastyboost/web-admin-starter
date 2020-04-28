import { createEvent, sample, guard, forward } from 'effector';
import { createInput, createForm } from 'effector-form';

import { Credentials } from 'api/user';
import { logIn } from 'features/user';

import { loginValidator, passValidator } from 'lib/validators';

export const submitForm = createEvent<void>();
export const resetForm = createEvent<void>();

export const loginStore = createInput({
  name: 'email',
  validator: loginValidator,
});

export const passStore = createInput({
  name: 'password',
  validator: passValidator,
});

export const loginForm = createForm<Credentials>({
  name: 'loginForm',
  fields: [loginStore, passStore],
  submit: submitForm,
  reset: resetForm,
});

guard({
  source: sample(loginForm.$values, submitForm),
  filter: loginForm.$isValid,
  target: logIn,
});

forward({
  from: logIn.done,
  to: resetForm,
});
