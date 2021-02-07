export type Coords = {
  longitude: number;
  latitude: number;
};

export type GeoConfig = {
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge?: number;
};

export type CarProps = {
  name: string;
  brand: string;
  category: string;
  dailyValue: number;
  image: string;
};

export type UserProps = {
  id: number;
  cpf: string;
  fullName: string;
  email: string;
  phone: string;
};
