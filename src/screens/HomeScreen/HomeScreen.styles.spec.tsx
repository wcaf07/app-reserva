import React from 'react';
import {render} from '@testing-library/react-native';
import {Container, ImageTitle} from './HomeScreen.styles';

describe('HomeScreen.styles', () => {
  test('THEN ImageTitle SHOULD match with snapshot when is show', () => {
    const component = render(<ImageTitle />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN Container SHOULD match with snapshot when is show', () => {
    const component = render(<Container />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
