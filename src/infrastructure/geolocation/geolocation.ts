import {useCallback, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {
  requestPermissions,
  PERMISSIONS,
} from '@infrastructure/permissions/permissions';
import {Coords, GeoConfig} from '@tokens/types';

type LocationResult = {
  error: boolean;
  errorPermission: boolean;
  coords: Coords;
};

const verifyAndRequestPermission = async (): Promise<boolean> => {
  try {
    const granted = await requestPermissions([
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      PERMISSIONS.IOS.LOCATION_ALWAYS,
      PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    ]);

    const statusAndroidGranted =
      granted[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];
    const statusIosGranted =
      granted[
        (PERMISSIONS.IOS.LOCATION_ALWAYS, PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
      ];

    if (statusAndroidGranted === 'granted' || statusIosGranted === 'granted')
      return true;
    else return false;
  } catch (err) {
    return false;
  }
};

export const useCurrentPosition = () => {
  const [currentPosition, setCurrentPosition] = useState<LocationResult>();

  const setError = useCallback((permissionError: boolean) => {
    setCurrentPosition({
      error: !permissionError,
      errorPermission: permissionError,
      coords: {
        latitude: 0,
        longitude: 0,
      },
    });
  }, []);

  const getCurrentPosition = useCallback(async () => {
    try {
      const permissionResult = await verifyAndRequestPermission();

      if (!permissionResult) {
        setError(true);
        return;
      }

      const config: GeoConfig = {
        enableHighAccuracy: true,
        timeout: 20000,
      };

      if (__DEV__) config.maximumAge = 1000;

      Geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            error: false,
            errorPermission: false,
            coords: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          });
        },
        () => {
          setError(false);
        },
        config,
      );
    } catch (error) {
      setError(false);
    }
  }, [setError]);

  return {
    currentPosition,
    getCurrentPosition,
  };
};
