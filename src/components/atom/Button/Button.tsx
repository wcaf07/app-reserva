import * as React from 'react';
import colors from "@src/components/tokens/colors";
import styled from "styled-components/native";

type ButtonProps = {
  text: string;
  color: string;
  onPress: () => void;
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${(props) => (props.color ? props.color : colors.white)};
`;

const TextButton = styled.Text`
  color: ${colors.white};
`;

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Container color={props.color} onPress={props.onPress}>
      <TextButton>{props.text}</TextButton>
    </Container>
  );
};

export default Button;
