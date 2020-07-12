import { MaterialCommunityIcons } from '@expo/vector-icons';
import hexToRgba from 'hex-to-rgba';
import styled from 'styled-components/native';
import {
  heightPercentageToDp,
  widthPercentageToDp,
} from 'utils/percentageToDp';
import { DetailsText } from '../styles';

type PokemonVersionProps = {
  version: string;
};

export const CardWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  width: ${widthPercentageToDp(90)}px;
  height: ${heightPercentageToDp(10)}px;
  border-radius: 6px;
  flex-direction: row;
`;

export const CardBlock = styled.View`
  width: ${widthPercentageToDp(50 - 5)}px;
  padding: ${widthPercentageToDp(5)}px;
`;

export const TopContent = styled.View`
  width: 100%;
  margin: ${heightPercentageToDp(3)}px 0;
`;

export const TopText = styled(DetailsText)`
  flex: 1;
  text-transform: lowercase;
  text-align: center;
  line-height: ${heightPercentageToDp(3)}px;
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

export const GenderBlock = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: ${widthPercentageToDp(2)}px;
`;

export const FemaleIcon = styled(MaterialCommunityIcons).attrs({
  name: 'gender-female',
  size: 15,
})`
  color: ${({ theme }) => theme.colors.blue3F2};
  padding-right: ${widthPercentageToDp(1)}px;
`;

export const MaleIcon = styled(MaterialCommunityIcons).attrs({
  name: 'gender-male',
  size: 15,
})`
  color: ${({ theme }) => theme.colors.pink83};
  padding-right: ${widthPercentageToDp(1)}px;
`;
