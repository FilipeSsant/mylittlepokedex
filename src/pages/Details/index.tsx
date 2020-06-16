import hexToRgba from 'hex-to-rgba';
import React, { useEffect } from 'react';
import { Container } from 'styles/globalComponents';
import { globalTheme } from 'styles/theme';

type DetailsProps = {
  route: any;
  navigation: any;
};

export const Details: React.SFC<DetailsProps> = ({
  navigation,
  route: { params },
}) => {
  const { name, predominantType } = params;
  useEffect(() => {
    navigation.setOptions({
      title: name,
      headerTintColor: globalTheme.black0D,
      headerStyle: {
        backgroundColor: hexToRgba(
          globalTheme.pokemon.type[predominantType],
          0.9
        ),
        elevation: 0,
        shadowOpacity: 0,
      },
    });
  }, []);

  return <Container backgroundType={predominantType}></Container>;
};
