import {BookingProps, calculateBookingValue} from './Booking';

describe('Booking.model', () => {
  test('SHOULD calculate payable days between dates correctly', () => {
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

    const diff = calculateBookingValue(booking);
    expect(diff).toBe(2);
  });
});
