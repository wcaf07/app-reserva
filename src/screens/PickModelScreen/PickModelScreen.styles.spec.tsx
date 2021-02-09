import React from 'react';
import {render} from '@testing-library/react-native';
import {
  Container,
  CarouselContainer,
  ImageCarousel,
  CarouselTitle,
  CarouselValue,
  TouchableText,
  FormContent,
  Title,
  Content,
} from './PickModelScreen.styles';

describe('MyReservationsScreen.styles', () => {
  test('THEN CarouselContainer SHOULD match with snapshot when is show', () => {
    const component = render(<CarouselContainer />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN Container SHOULD match with snapshot when is show', () => {
    const component = render(<Container />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN ImageCarousel SHOULD match with snapshot when is show', () => {
    const component = render(<ImageCarousel />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN CarouselTitle SHOULD match with snapshot when is show', () => {
    const component = render(<CarouselTitle />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN CarouselValue SHOULD match with snapshot when is show', () => {
    const component = render(<CarouselValue />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN TouchableText SHOULD match with snapshot when is show', () => {
    const component = render(<TouchableText />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN FormContent SHOULD match with snapshot when is show', () => {
    const component = render(<FormContent />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN Title SHOULD match with snapshot when is show', () => {
    const component = render(<Title />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN Content SHOULD match with snapshot when is show', () => {
    const component = render(<Content />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
