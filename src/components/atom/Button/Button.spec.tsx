import React from 'react';
import {render} from '@testing-library/react-native';
import Button from './Button';
import colors from '@/components/tokens/colors';

describe('Button.styles', () => {
  test('THEN Button SHOULD match with snapshot when is show', () => {
    const component = render(
      <Button text="test" color={colors.blueLight} onPress={() => {}} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
