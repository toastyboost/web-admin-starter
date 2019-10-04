import styled from 'styled-components'

import { MEDIA } from 'lib/media'

export const Wrap = styled.div`
  width: 100%;
  margin: 0 auto;

  ${MEDIA.PHONE`
    padding: 0 12px;
  `}

  ${MEDIA.SMARTPHONE`
    padding: 0 16px;
  `}

  ${MEDIA.TABLET`
    padding: 0 20px;
  `}

  ${MEDIA.DESKTOP`
    padding: 0 24px;
  `};

`
