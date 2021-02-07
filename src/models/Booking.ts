import {CarProps, UserProps} from '@tokens/types';

export type BookingProps = {
  id: number;
  client?: UserProps;
  car: CarProps;
  datePickup: Date;
  dateCheckout: Date;
};

export const calculateBookingValue = (booking: BookingProps): number => {
  const diff = booking.dateCheckout.getTime() - booking.datePickup.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
  return days;
};
