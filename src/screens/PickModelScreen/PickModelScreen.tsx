import Divider from '@atom/Divider/Divider';
import * as React from 'react';
import {Text, View, Alert} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {data} from './data';
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
import {useNavigation} from '@react-navigation/native';
import {useCurrentPosition} from '@infrastructure/geolocation/geolocation';
import {CarProps} from '@tokens/types';
import {saveBooking} from '@infrastructure/storage/storage';
import {BookingProps} from '@/models/Booking';

type renderType = {
  item: CarProps;
  index: number;
};

const PickModelScreen: React.FC = () => {
  const [datePickup, setDatePickup] = React.useState(new Date());
  const [show, setShow] = React.useState(false);
  const [dateCheckout, setDateCheckout] = React.useState(new Date());
  const [dateType, setDateType] = React.useState('');
  const [currentItem, setCurrentItem] = React.useState(0);
  const [proceed, setProceed] = React.useState(false);

  const navigation = useNavigation();
  const {currentPosition, getCurrentPosition} = useCurrentPosition();

  const onChange = (_event, selectedDate) => {
    const date = dateType === 'p' ? datePickup : dateCheckout;
    const currentDate = selectedDate || date;
    setShow(false);

    dateType === 'p'
      ? setDatePickup(currentDate)
      : setDateCheckout(currentDate);
  };

  const alertLocation = () => {
    Alert.alert(
      'Localização',
      'Permita acesso à localização para retirada na agência mais próxima',
      [
        {
          text: 'OK',
          onPress: () => {
            setProceed(true);
            getCurrentPosition();
          },
        },
      ],
      {cancelable: true},
    );
  };

  const saveBookingAndNavigate = React.useCallback(() => {
    const car = data[currentItem];
    const booking: BookingProps = {
      id: new Date().getTime(),
      car,
      dateCheckout,
      datePickup,
    };
    saveBooking(booking);
    setProceed(false);
    navigation.navigate('Details', {booking});
  }, [currentItem, dateCheckout, datePickup, navigation]);

  React.useEffect(() => {
    if (currentPosition?.error || currentPosition?.errorPermission) {
      getCurrentPosition();
    } else if (currentPosition?.coords && proceed) {
      Alert.alert(
        'Retirada',
        `Você irar retirar o carro nas posições ${currentPosition?.coords.latitude} e ${currentPosition?.coords.longitude}`,
        [
          {
            text: 'OK',
            onPress: () => {
              saveBookingAndNavigate();
            },
          },
        ],
        {cancelable: true},
      );
    }
  }, [currentPosition, getCurrentPosition, proceed, saveBookingAndNavigate]);

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
            onSnapToItem={(i) => {
              setCurrentItem(i);
            }}
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
        <Button
          onPress={() => {
            alertLocation();
          }}
          color={colors.blueLight}
          text="Prosseguir"
        />
      </View>
    </Container>
  );
};

export default PickModelScreen;
