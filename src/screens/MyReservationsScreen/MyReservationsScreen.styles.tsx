import colors from "@/components/tokens/colors";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  background-color: ${colors.white}
  flex: 1;
`;

const ItemList = styled.TouchableOpacity`
  padding: 5px;
`;

const TextItem = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: ${colors.black};
`;

const TextSubtitle = styled.Text`
  font-size: 10px;
`;

const TextSubValue = styled(TextSubtitle)`
  font-size: 13px;
`;

export {Container, TextItem, TextSubtitle, ItemList, TextSubValue};
