import * as React from 'react';
import { useStore } from 'effector-react';

import { $user, $isUserPending, useAuth } from 'features/user';
import { GenericTemplate } from 'ui/templates';

import { Routing } from './routing';

export const App = () => {
  useAuth()

  const isUserPending = useStore($isUserPending);
  const user = useStore($user);

  return (
    <GenericTemplate
      isAuthed={Boolean(user.role)}
      isPending={isUserPending}
    >
      <Routing />
    </GenericTemplate>
  );
};
