import * as React from 'react';
import styled from 'styled-components/native';
import colors from '@tokens/colors';

type HomeButtonType = {
  bgColor: string;
  text: string;
};

const Container = styled.TouchableOpacity`
  height: 100px;
  background-color: ${(props: {bgColor: any}) => props.bgColor};
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 16px;
`;

const HomeButton: React.FC<HomeButtonType> = (atts) => {
  return (
    <Container bgColor={atts.bgColor}>
      <Text>{atts.text}</Text>
    </Container>
  );
};

export default HomeButton;
