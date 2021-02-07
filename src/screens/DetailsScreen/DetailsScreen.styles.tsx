import colors from "@tokens/colors";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;

const ScrollContent = styled.View`
  padding: 10px;
`;

const CarContainer = styled.View`
  flex: 1;
  align-items: center;
`;

const ImageDetails = styled.Image`
  width: 280px;
  height: 150px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.greenDark};
`;

const Text = styled.Text`
  font-size: 15px;
  margin-top: 5px;
`;

const ValueText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.greenDark};
`;

const Section = styled.View`
  margin-top: 20px;
`;

export {
  Container,
  ImageDetails,
  CarContainer,
  Title,
  Text,
  ValueText,
  ScrollContent,
  Section,
};
