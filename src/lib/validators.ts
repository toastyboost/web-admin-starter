import { combine } from 'effector';

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

export const validateFields = (fields: any) => {
  const allStores = fields.map(({ $error }: any) => $error);
  return combine(allStores, (all) =>
    all.every((value: string | null) => !value),
  );
};
