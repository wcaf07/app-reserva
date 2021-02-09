import Geolocation from '@react-native-community/geolocation';
import {useCurrentPosition} from '@infrastructure/geolocation/geolocation';
import {renderHook, act} from '@testing-library/react-hooks';
import {requestPermissions} from '@infrastructure/permissions/permissions';

const mockPlatform = (OS: 'ios' | 'android') => {
  jest.resetModules();
  jest.doMock('react-native/Libraries/Utilities/Platform', () => ({
    OS,
    select: (objs: {ios: unknown; android: unknown}) => objs[OS],
  }));
};

jest.mock('@react-native-community/geolocation', () => {
  return {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn(),
  };
});

jest.mock('@/infrastructure/permissions/permissions', () => {
  return {
    requestPermissions: jest.fn(),
    PERMISSIONS: {
      ANDROID: {
        ACCESS_FINE_LOCATION: 'ACCESS_FINE_LOCATION',
      },
      IOS: {
        LOCATION_ALWAYS: 'LOCATION_ALWAYS',
        LOCATION_WHEN_IN_USE: 'LOCATION_WHEN_IN_USE',
      },
    },
  };
});

describe('geolocation', () => {
  describe('BEHAVIOR ANDRODID', () => {
    beforeEach(() => {
      mockPlatform('android');
    });
    test('SHOULD return the current position', async () => {
      (requestPermissions as jest.Mock).mockResolvedValue({
        ACCESS_FINE_LOCATION: 'granted',
      });
      const position = {
        error: false,
        errorPermission: false,
        coords: {
          latitude: 12.333,
          longitude: -23.567,
        },
      };

      Geolocation.getCurrentPosition.mockImplementation((cb) => cb(position));

      const {result} = renderHook(() => useCurrentPosition());

      await act(async () => {
        await result.current.getCurrentPosition();
      });

      expect(result.current.currentPosition).toEqual(position)
    });

    describe('WHEN an error occurs ckecking permission', () => {
      test('THEN it SHOULD return error', async () => {
        (requestPermissions as jest.Mock).mockImplementation(() => {
          throw new Error('error');
        });
        const {result} = renderHook(() => useCurrentPosition());

        await act(async () => {
          await result.current.getCurrentPosition();
        });

        expect(result.current.currentPosition).toEqual({
          error: false,
          errorPermission: true,
          coords: {
            latitude: 0,
            longitude: 0,
          },
        });
      });
    });

    describe('WHEN an error occurs obtaining the device position', () => {
      test('THEN it SHOULD return error', async () => {
        (requestPermissions as jest.Mock).mockResolvedValue({
          ACCESS_FINE_LOCATION: 'granted',
        });

        Geolocation.getCurrentPosition = jest.fn((_, error) => {
          Promise.resolve(
            error({
              code: 1,
              message: 'GeoLocation Error',
            }),
          );
        });

        const {result} = renderHook(() => useCurrentPosition());

        await act(async () => {
          await result.current.getCurrentPosition();
        });

        expect(result.current.currentPosition).toEqual({
          error: true,
          errorPermission: false,
          coords: {
            latitude: 0,
            longitude: 0,
          },
        });
      });
    });

    describe('WHEN did not has permission to access the user location', () => {
      test('THEN it SHOULD return error', async () => {
        (requestPermissions as jest.Mock).mockResolvedValue({
          ACCESS_FINE_LOCATION: 'denied',
        });

        const {result} = renderHook(() => useCurrentPosition());

        await act(async () => {
          await result.current.getCurrentPosition();
        });

        expect(result.current.currentPosition).toEqual({
          error: false,
          errorPermission: true,
          coords: {
            latitude: 0,
            longitude: 0,
          },
        });
      });
    });
  });
});
