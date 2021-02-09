import * as React from 'react';
import colors from '@tokens/colors';
import styled from 'styled-components/native';

type ButtonProps = {
  text: string;
  color: string;
  onPress: () => void;
  testID?: string;
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: ${(props) => (props.color ? props.color : colors.white)};
`;

const TextButton = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Container
      color={props.color}
      onPress={props.onPress}
      testID={props.testID}>
      <TextButton>{props.text}</TextButton>
    </Container>
  );
};

export default Button;
