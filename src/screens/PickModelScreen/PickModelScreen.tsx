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
  FormContent,
  Title,
  Content,
} from './PickModelScreen.styles';
import colors from '@tokens/colors';
import Button from '@atom/Button/Button';

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
      <Content>
        <View>
          <Carousel
            layout="default"
            data={data}
            sliderWidth={400}
            itemWidth={270}
            renderItem={renderItem}
          />
        </View>
        <FormContent>
          <Title color={colors.black}>Retirada :</Title>
          <TouchableText
            text={datePickup.toDateString()}
            onPress={() => {
              setShow(true);
              setDateType('p');
            }}
          />
          <Title color={colors.black}>Devolução :</Title>
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
        </FormContent>
      </Content>
      <View>
        <Button onPress={() => {}} color={colors.blueLight} text="Prosseguir" />
      </View>
    </Container>
  );
};

export default PickModelScreen;
