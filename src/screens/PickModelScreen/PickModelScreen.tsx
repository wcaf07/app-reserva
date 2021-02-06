import Divider from '@atom/Divider/Divider';
import * as React from 'react';
import {Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {data, dataType} from './data';
import {
  Container,
  CarouselContainer,
  ImageCarousel,
  CarouselTitle,
  CarouselValue,
} from './PickModelScreen.styles';

type renderType = {
  item: dataType;
  index: number;
};

const PickModelScreen: React.FC = () => {
  const renderItem = ({item}: renderType) => {
    return (
      <CarouselContainer>
        <ImageCarousel source={item.image} />
        <Divider />
        <CarouselTitle>
          {item.brand} {item.name}
        </CarouselTitle>
        <Text>{item.category}</Text>
        <CarouselValue>R${item.dailyValue} /dia</CarouselValue>
      </CarouselContainer>
    );
  };

  return (
    <Container>
      <Carousel
        layout="default"
        data={data}
        sliderWidth={400}
        itemWidth={270}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default PickModelScreen;
