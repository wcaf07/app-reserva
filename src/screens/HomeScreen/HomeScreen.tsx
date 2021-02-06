import * as React from 'react';
import HomeButton from '@atom/Button/HomeButton/HomeButton';
import colors from '@tokens/colors';
import {Container, ImageTitle} from './HomeScreen.styles';
import {useNavigation} from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ImageTitle source={require('@images/car-rental.png')} />
      <HomeButton
        bgColor={colors.blueLight}
        text="Nova reserva"
        onPress={() => navigation.navigate('PickModel')}
      />
      <HomeButton bgColor={colors.greenLight} text="Minhas reservas" />
    </Container>
  );
};

export default HomeScreen;
