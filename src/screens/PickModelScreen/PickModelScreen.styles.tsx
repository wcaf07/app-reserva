import colors from '@tokens/colors';
import {TouchableOpacity} from 'react-native';
import * as React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
  align-items: stretch;
`;

const FormContent = styled.View`
  flex: 1;
  padding-horizontal: 10px;
`;

const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

const CarouselContainer = styled.View`
  background-color: ${colors.white};
  border-radius: 15px;
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 5px;
  margin-right: 5px;
  border-width: 0.2px;
  border-color: ${colors.gray};
  shadow-opacity: 0.3;
  shadow-radius: 8px;
  elevation: 5;
`;

const ImageCarousel = styled.Image`
  width: 220px;
  height: 120px;
`;

const CarouselTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.greenDark};
`;

const CarouselValue = styled.Text`
  margin-top: 10px;
  font-weight: bold;
  color: ${colors.greenDark};
`;

const Title = styled.Text`
  font-size: 15px;
  margin-top: 5px;
  color: ${(props) => (props.color ? props.color : colors.white)};
`;

const TouchableText: React.FC<{text: string; onPress: () => void}> = (
  props,
) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        padding: 5,
        backgroundColor: colors.greenDark,
        marginTop: 5,
        borderRadius: 5,
      }}>
      <Title>{props.text}</Title>
    </TouchableOpacity>
  );
};

export {
  Container,
  CarouselContainer,
  ImageCarousel,
  CarouselTitle,
  CarouselValue,
  Title,
  TouchableText,
  FormContent,
  Content,
};
