import styled from 'styled-components/native';
import colors from '@tokens/colors';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
  background-color: ${colors.white};
`;

const ImageTitle = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
  margin-bottom: 100px;
`;

export {Container, ImageTitle};
