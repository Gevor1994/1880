import styled from 'styled-components';
import withTheme from '../../../config/themes/withTheme';
import { mediasmAndDown, mediaxsPlusAndDown } from '../../../config/style-config';

export const Holder = withTheme(styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 38vw;
  border: none;
`);

export const Image = withTheme(styled.img`
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
  box-sizing: border-box;
`);





export const ButtonsHolder = styled.div`
  display: flex;

  .get-bonus,
  .details {
    min-width: 140px;

  }
`;

