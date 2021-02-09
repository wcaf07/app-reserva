import React from 'react';
import {setParams} from '@react-navigation/native';
import DetailsScreen from './DetailsScreen';
import {render, RenderAPI} from '@testing-library/react-native';
import {BookingProps} from '@/models/Booking';
import { act } from 'react-test-renderer';
jest.useFakeTimers();

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

describe('DetailsScreen', () => {
  describe('Behavior', () => {
    test('SHOULD render actions when coming from PickModelScreen', async () => {
      setParams({
        booking,
        actions: true,
      });
      const component = render(<DetailsScreen />);

      expect(component.getByTestId('botao cadastrar')).toBeDefined();
    });
    test('SHOULD NOT render actions when coming from MyReservationsScreen', () => {
      setParams({
        booking,
        actions: false,
      });
      const component = render(<DetailsScreen />);

      expect(component.queryByTestId('botao cadastrar')).toBeNull();
    });
  });
});
