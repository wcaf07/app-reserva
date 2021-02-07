import Divider from '@atom/Divider/Divider';
import * as React from 'react';
import {Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {data, dataType} from './data';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Container,
  CarouselContainer,
  ImageCarousel,
  CarouselTitle,
  CarouselValue,
  TouchableText,
  Content,
  Title,
} from './PickModelScreen.styles';

type renderType = {
  item: dataType;
  index: number;
};

const PickModelScreen: React.FC = () => {
  const [datePickup, setDatePickup] = React.useState(new Date());
  const [show, setShow] = React.useState(false);
  const [dateCheckout, setDateCheckout] = React.useState(new Date());
  const [dateType, setDateType] = React.useState('');

  const onChange = (_event, selectedDate) => {
    const date = dateType === 'p' ? datePickup : dateCheckout;
    const currentDate = selectedDate || date;
    setShow(false);

    dateType === 'p'
      ? setDatePickup(currentDate)
      : setDateCheckout(currentDate);
  };

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
      <View>
        <Carousel
          layout="default"
          data={data}
          sliderWidth={400}
          itemWidth={270}
          renderItem={renderItem}
        />
      </View>
      <Content>
        <Title>Retirada :</Title>
        <TouchableText
          text={datePickup.toDateString()}
          onPress={() => {
            setShow(true);
            setDateType('p');
          }}
        />
        <Title>Devolução :</Title>
        <TouchableText
          text={dateCheckout.toDateString()}
          onPress={() => {
            setShow(true);
            setDateType('c');
          }}
        />

        {show && (
          <DateTimePicker
            value={datePickup}
            mode="date"
            display="spinner"
            onChange={onChange}
          />
        )}
      </Content>
    </Container>
  );
};

export default PickModelScreen;
