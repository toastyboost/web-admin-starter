import { combine } from 'effector';
import { InputResult, GroupResult, FieldResult } from 'effector-form';

export const loginValidator = (login: string) => {
  if (login.length === 0) {
    return 'Обязательное поле';
  }
  if (!/\w+/.test(login)) {
    return 'Некорректное имя';
  }
  return null;
};

export const passValidator = (password: string) => {
  if (password.length === 0) {
    return 'Обязательное поле';
  }
  return null;
};

export const fieldsValidator = <T>(
  fields: (InputResult | GroupResult | FieldResult<T>)[],
) => {
  const allFields = fields.map(({ $error }) => $error);
  return combine(allFields, (all) => all.every((value) => !value));
};

export function isObjectEmpty(obj: object) {
  return Object.getOwnPropertyNames(obj).length > 0;
}

export function isParamEmpty() {
  return undefined;
}
