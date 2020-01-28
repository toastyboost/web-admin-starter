import { useStore } from 'effector-react';

import { $session } from './model';

export const useAuth = () => {
  const session = useStore($session);
  return Boolean(session.role);
};
