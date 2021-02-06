import React from 'react';
import HomeButton from '../../components/atom/Button/HomeButton/HomeButton';
import colors from '../../components/tokens/colors';
import {Container, ImageTitle} from './HomeScreen.styles';

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <ImageTitle source={require('../../assets/images/car-rental.png')} />
      <HomeButton bgColor={colors.blueLight} text="Nova reserva" />
      <HomeButton bgColor={colors.greenLight} text="Minhas reservas" />
    </Container>
  );
};

export default HomeScreen;
