export type Coords = {
  longitude: number;
  latitude: number;
};

export type GeoConfig = {
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge?: number;
};
