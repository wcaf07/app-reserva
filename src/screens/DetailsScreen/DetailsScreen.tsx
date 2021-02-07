import {BookingProps, calculateBookingValue} from '@/models/Booking';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';
import * as React from 'react';
import {ScrollView} from 'react-native';
import {
  CarContainer,
  Container,
  ImageDetails,
  Title,
  Text,
  ValueText,
  ScrollContent,
  Section,
} from './DetailsScreen.styles';
import {Picker} from '@react-native-picker/picker';
import Button from '@atom/Button/Button';
import colors from '@/components/tokens/colors';
import {loadUsers} from '@infrastructure/storage/storage';
import {UserProps} from '@tokens/types';

type ParamsList = {
  Details: {
    booking: BookingProps;
  };
};
type DetailsScreenRouteProp = RouteProp<ParamsList, 'Details'>;

const DetailsScreen: React.FC = () => {
  const [userSelected, setUserSelected] = React.useState('');
  const [users, setUsers] = React.useState<UserProps[]>([]);
  const route = useRoute<DetailsScreenRouteProp>();
  const booking = route.params.booking;

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const uss = await loadUsers();
    setUsers(uss);
  };
  console.log(userSelected);

  return (
    <Container>
      <ScrollView>
        <ScrollContent>
          <CarContainer>
            <ImageDetails source={booking.car.image} />
          </CarContainer>
          <Section>
            <Title>
              {booking.car.brand} - {booking.car.name}
            </Title>
            <Text>Retirada: {booking.datePickup.toDateString()}</Text>
            <Text>Retirada: {booking.dateCheckout.toDateString()}</Text>
          </Section>
          <Section>
            <Text>
              Valor da diária: <ValueText>R${booking.car.dailyValue}</ValueText>
            </Text>
            <Text>
              Valor total ({calculateBookingValue(booking)} dias):
              <ValueText>
                {' '}
                R${calculateBookingValue(booking) * booking.car.dailyValue}
              </ValueText>
            </Text>
          </Section>
          <Section>
            <Text>Selecione o cliente:</Text>
            <Picker
              selectedValue={userSelected}
              onValueChange={(itemValue, itemIndex) =>
                setUserSelected(itemValue.toString())
              }>
              {users.map((user) => (
                <Picker.Item label={user.fullName} value={user.id} />
              ))}
            </Picker>
          </Section>
        </ScrollContent>
      </ScrollView>
      <Button
        color={colors.gray}
        text="Cadastrar novo cliente"
        onPress={() => {}}
      />
      {userSelected.toString().length > 0 && (
        <Button color={colors.blueLight} text="Finalizar" onPress={() => {}} />
      )}
    </Container>
  );
};

export default DetailsScreen;
