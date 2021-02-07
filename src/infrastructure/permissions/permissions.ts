import {
  requestMultiple,
  PERMISSIONS,
  check,
  Permission,
} from 'react-native-permissions';

export const requestPermissions = async (permissions: Permission[]) => {
  return await requestMultiple(permissions);
};

export const checkPermission = async (permission: Permission) => {
  return await check(permission);
};

export type {Permission};

export {PERMISSIONS};
