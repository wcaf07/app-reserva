import {requestMultiple, check} from 'react-native-permissions';
import {requestPermissions, PERMISSIONS, checkPermission} from './permissions';

jest.mock('react-native-permissions', () => ({
  requestMultiple: jest.fn(),
  check: jest.fn(),
  PERMISSIONS: {
    ANDROID: {
      READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
      WRITE_EXTERNAL_STORAGE: 'WRITE_EXTERNAL_STORAGE',
    },
  },
  IOS: {
    LOCATION_ALWAYS: 'LOCATION_ALWAYS',
  },
}));

describe('Permissions', () => {
  test('SHOULD call requestPermissions with correct params ', async () => {
    await requestPermissions([PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE]);
    expect(requestMultiple).toBeCalledWith([
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    ]);
  });

  test('SHOULD call checkPermission with correct params ', async () => {
    await checkPermission(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
    expect(check).toBeCalledWith(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
  });
});
