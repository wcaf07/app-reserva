import { UserProps } from '@/components/tokens/types';
import {BookingProps} from '@/models/Booking';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveBooking = async (booking: BookingProps) => {
  try {
    let bookingsArray = await loadBookings();
    if (bookingsArray) {
      bookingsArray = bookingsArray.filter((b) => b.id !== booking.id);
      bookingsArray.push(booking);
    } else {
      bookingsArray = [booking];
    }
    const bookingsString = JSON.stringify(bookingsArray);
    await AsyncStorage.setItem('@bookings', bookingsString);
  } catch (error) {
    console.log('Error on saving booking');
  }
};

const loadBookings = async (): Promise<BookingProps[] | null> => {
  const bookingsString = await AsyncStorage.getItem('@bookings');
  if (bookingsString !== null) {
    const bookings = JSON.parse(bookingsString);
    return bookings;
  }
  return null;
};

const saveUser = async (user: UserProps) => {
  try {
    let usersArray = await loadUsers();
    if (usersArray) {
      usersArray = usersArray.filter((u) => u.id !== user.id);
      usersArray.push(user);
    } else {
      usersArray = [user];
    }
    const usersArrayString = JSON.stringify(usersArray);
    await AsyncStorage.setItem('@users', usersArrayString);
  } catch (error) {
    console.log('Error on saving booking');
  }
};

const loadUsers = async (): Promise<UserProps[]> => {
  const usersArrayString = await AsyncStorage.getItem('@users');
  if (usersArrayString !== null) {
    const users = JSON.parse(usersArrayString);
    return users;
  }
  return [];
};

export {saveBooking, loadBookings, saveUser, loadUsers};
