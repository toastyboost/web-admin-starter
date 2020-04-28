import * as React from 'react';

import { getUser } from './model';

export const useAuth = () => {
  React.useEffect(() => {
    getUser();
  }, []);
};
