import React from 'react';
import {render} from '@testing-library/react-native';
import {
  CarContainer,
  Container,
  ImageDetails,
  Title,
  Text,
  ValueText,
  ScrollContent,
  Section,
  ErroFormText,
  ModalContainer,
  TextInputForm,
} from './DetailsScreen.styles';

describe('DetailsScreen.styles', () => {
  test('THEN CarContainer SHOULD match with snapshot when is show', () => {
    const component = render(<CarContainer />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN Container SHOULD match with snapshot when is show', () => {
    const component = render(<Container />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN ImageDetails SHOULD match with snapshot when is show', () => {
    const component = render(<ImageDetails />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN Title SHOULD match with snapshot when is show', () => {
    const component = render(<Title />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN Text SHOULD match with snapshot when is show', () => {
    const component = render(<Text />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN ValueText SHOULD match with snapshot when is show', () => {
    const component = render(<ValueText />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN ScrollContent SHOULD match with snapshot when is show', () => {
    const component = render(<ScrollContent />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN Section SHOULD match with snapshot when is show', () => {
    const component = render(<Section />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN ErroFormText SHOULD match with snapshot when is show', () => {
    const component = render(<ErroFormText />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN ModalContainer SHOULD match with snapshot when is show', () => {
    const component = render(<ModalContainer />).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('THEN TextInputForm SHOULD match with snapshot when is show', () => {
    const component = render(<TextInputForm />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
