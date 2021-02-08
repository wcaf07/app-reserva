import Divider from '@atom/Divider/Divider';
import {loadBookings} from '@/infrastructure/storage/storage';
import {BookingProps, calculateBookingValue} from '@/models/Booking';
import * as React from 'react';
import {FlatList} from 'react-native';
import {
  Container,
  TextItem,
  TextSubtitle,
  ItemList,
  TextSubValue,
} from './MyReservationsScreen.styles';
import {useNavigation} from '@react-navigation/native';

const MyReservationsScreen: React.FC = () => {
  const [bookings, setBookings] = React.useState<BookingProps[]>();
  const navigation = useNavigation();

  React.useEffect(() => {
    fetchBooking();
  }, []);

  const fetchBooking = async () => {
    const bks = await loadBookings();
    setBookings(bks);
  };

  return (
    <Container>
      <FlatList
        data={bookings}
        keyExtractor={(_, i) => i.toString()}
        renderItem={(item) => (
          <ItemList
            onPress={() => {
              const booking = item.item;
              navigation.navigate('Details', {booking, actions: false});
            }}>
            <TextItem>{item.item.client?.fullName}</TextItem>
            <TextSubtitle>R${item.item.car.dailyValue}/dia</TextSubtitle>
            <TextSubValue>
              Total: R${calculateBookingValue(item.item) * item.item.car.dailyValue}
            </TextSubValue>
            <Divider />
          </ItemList>
        )}
      />
    </Container>
  );
};

export default MyReservationsScreen;
