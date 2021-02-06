import colors from '@tokens/colors';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
  justify-content: center;
`;

const CarouselContainer = styled.View`
  background-color: ${colors.white};
  border-radius: 15px;
  padding: 10px;
  margin-top: 20px;
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
`;

const CarouselValue = styled.Text`
  margin-top: 10px;
  font-weight: bold;
  color: ${colors.greenDark};
`;

export {
  Container,
  CarouselContainer,
  ImageCarousel,
  CarouselTitle,
  CarouselValue,
};
