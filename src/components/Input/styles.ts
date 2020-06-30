import styled from 'styled-components/native';
import {
  widthPercentageToDp,
  heightPercentageToDp,
} from 'utils/percentageToDp';
import hexToRgba from 'hex-to-rgba';

export const BaseInput = styled.TextInput`
  height: ${heightPercentageToDp(5)}px;
  background-color: ${({ theme }) => hexToRgba(theme.grayD1, 0.3)};
  border-radius: 5px;
  padding: 0 ${widthPercentageToDp(3)}px;
  font-size: ${widthPercentageToDp(5)}px;
`;
