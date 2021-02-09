import React from 'react';
import {render} from '@testing-library/react-native';
import Divider from './Divider';

describe('Divider.styles', () => {
  test('THEN Divider SHOULD match with snapshot when is show', () => {
    const component = render(<Divider />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
