import React from 'react';
import {render} from '@testing-library/react-native';
import HomeButton from './HomeButton';
import colors from '@/components/tokens/colors';

describe('HomeButton.styles', () => {
  test('THEN HomeButton SHOULD match with snapshot when is show', () => {
    const component = render(
      <HomeButton text="test" bgColor={colors.blueLight} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
