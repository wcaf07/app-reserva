import React from 'react';
import {render} from '@testing-library/react-native';
import {
  Container,
  TextItem,
  TextSubtitle,
  ItemList,
  TextSubValue,
} from './MyReservationsScreen.styles';

describe('MyReservationsScreen.styles', () => {
  test('THEN TextItem SHOULD match with snapshot when is show', () => {
    const component = render(<TextItem />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN Container SHOULD match with snapshot when is show', () => {
    const component = render(<Container />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN TextSubtitle SHOULD match with snapshot when is show', () => {
    const component = render(<TextSubtitle />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN ItemList SHOULD match with snapshot when is show', () => {
    const component = render(<ItemList />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN TextSubValue SHOULD match with snapshot when is show', () => {
    const component = render(<TextSubValue />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
