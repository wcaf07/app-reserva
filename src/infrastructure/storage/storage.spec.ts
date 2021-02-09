import {UserProps} from '@/components/tokens/types';
import {BookingProps} from '@/models/Booking';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {saveUser, loadUsers, saveBooking, loadBookings} from './storage';

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const booking: BookingProps = {
  id: today.getTime(),
  car: {
    name: 'Palio 1.0',
    brand: 'Fiat',
    category: 'Popular',
    dailyValue: 50,
    image: require('@images/palio.jpg'),
  },
  dateCheckout: tomorrow,
  datePickup: today,
};

const user: UserProps = {
  cpf: '09009099',
  email: 'wcaf@gmail.com',
  fullName: 'Wanderley Carvalho',
  id: new Date().getTime(),
  phone: '91723548321',
};

describe('storage', () => {
  describe('booking', () => {
    test('SHOULD save booking with correct parameter', async () => {
      await saveBooking(booking);
      expect(AsyncStorage.setItem).toBeCalledWith(
        '@bookings',
        JSON.stringify([booking]),
      );
    });
    test('SHOULD load bookings with correct key', async () => {
      await loadBookings();
      expect(AsyncStorage.getItem).toBeCalledWith('@bookings');
    });
  });
  describe('user', () => {
    test('SHOULD save user with correct parameter', async () => {
      await saveUser(user);
      expect(AsyncStorage.setItem).toBeCalledWith(
        '@users',
        JSON.stringify([user]),
      );
    });
    test('SHOULD load users with correct key', async () => {
      await loadUsers();
      expect(AsyncStorage.getItem).toBeCalledWith('@users');
    });
  });
});
