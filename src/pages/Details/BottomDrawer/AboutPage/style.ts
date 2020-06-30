import styled from 'styled-components/native';
import {
  heightPercentageToDp,
  widthPercentageToDp,
} from 'utils/percentageToDp';

export const PageContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 ${widthPercentageToDp(5)}px;
  flex-direction: column;
  align-items: center;
`;

export const CardWrapper = styled.View`
  background-color: ${({ theme }) => theme.secondaryBackground};
  width: ${widthPercentageToDp(90)}px;
  height: ${heightPercentageToDp(10)}px;
  border-radius: 6px;
  flex-direction: row;
`;

export const CardBlock = styled.View`
  width: ${widthPercentageToDp(50 - 5)}px;
  padding: ${widthPercentageToDp(5)}px;
`;

export const BottomContent = styled.View`
  width: 100%;
  margin-top: ${heightPercentageToDp(3)}px;
`;

export const InfoAboutContainer = styled.View`
  margin-top: ${heightPercentageToDp(2)}px;
`;

export const InfoAboutBlock = styled.View`
  flex-direction: row;
  padding-bottom: ${heightPercentageToDp(1)}px;
`;
