import { css, FlattenSimpleInterpolation } from 'styled-components';

import { BREAKPOINTS } from 'lib/constants';

type MediaObject = { [T in keyof typeof BREAKPOINTS]: <P>(props: P) => FlattenSimpleInterpolation };

const defaults = {
  DESKTOP: () => css``,
  TABLET: () => css``,
  SMARTPHONE: () => css``,
  PHONE: () => css``
};

export const MEDIA = (Object.keys(BREAKPOINTS) as (keyof typeof BREAKPOINTS)[]).reduce<MediaObject>(
  (acc: MediaObject, label: keyof typeof BREAKPOINTS) => {
    acc[label] = (props: any) => css`
      @media (min-width: ${BREAKPOINTS[label] / 16}em) {
        ${css(props)};
      }
    `;
    return acc;
  },
  defaults
);
