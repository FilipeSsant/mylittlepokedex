import styled from 'styled-components/native';
import {
  widthPercentageToDp,
  heightPercentageToDp,
} from 'utils/percentageToDp';

export const BackClickable = styled.TouchableOpacity`
  margin-left: ${widthPercentageToDp(2)}px;
`;
