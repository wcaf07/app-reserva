export const data = [
  {
    name: 'Palio 1.0',
    brand: 'Fiat',
    category: 'Popular',
    dailyValue: 50,
    image: require('@images/palio.jpg'),
  },
  {
    name: 'Polo 1.6',
    brand: 'VW',
    category: 'Popular',
    dailyValue: 80,
    image: require('@images/polo.jpg'),
  },
  {
    name: 'Compass 2.0',
    brand: 'Jeep',
    category: 'SUV',
    dailyValue: 150,
    image: require('@images/compass.jpg'),
  },
];

export type dataType = {
  name: string;
  brand: string;
  category: string;
  dailyValue: number;
  image: string;
};
