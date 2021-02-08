import {BookingProps, calculateBookingValue} from '@/models/Booking';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';
import * as React from 'react';
import {ScrollView, Modal, View} from 'react-native';
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
import {Picker} from '@react-native-picker/picker';
import Button from '@atom/Button/Button';
import colors from '@/components/tokens/colors';
import {
  loadUsers,
  saveBooking,
  saveUser,
} from '@infrastructure/storage/storage';
import {UserProps} from '@tokens/types';
import {useForm, Controller} from 'react-hook-form';

type ParamsList = {
  Details: {
    booking: BookingProps;
    actions: boolean;
  };
};

type DetailsScreenRouteProp = RouteProp<ParamsList, 'Details'>;

const DetailsScreen: React.FC = () => {
  const [userSelectedIndex, setUserSelectedIndex] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [users, setUsers] = React.useState<UserProps[]>([]);
  const route = useRoute<DetailsScreenRouteProp>();
  const booking = route.params.booking;
  const actions = route.params.actions;
  const {control, handleSubmit, errors} = useForm();
  const navigation = useNavigation();

  const onSubmit = async (data) => {
    let us = data;
    us.id = new Date().getTime();
    await saveUser(us);
    fetchUsers();
    setModalVisible(false);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const uss = await loadUsers();
    console.log(uss);
    setUsers(uss);
  };

  const updateBooking = async () => {
    booking.client = users[userSelectedIndex];
    await saveBooking(booking);
    console.log(booking);
    navigation.navigate('Home');
  };

  return (
    <Container>
      <Modal animationType="slide" visible={modalVisible}>
        <ModalContainer>
          <ScrollContent>
            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <Section>
                  <Text>Cpf:</Text>
                  <TextInputForm
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                  />
                </Section>
              )}
              name="cpf"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.cpf && (
              <ErroFormText>Esse campo é obrigatório.</ErroFormText>
            )}

            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <Section>
                  <Text>Full Name:</Text>
                  <TextInputForm
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                  />
                </Section>
              )}
              name="fullName"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.fullName && (
              <ErroFormText>Esse campo é obrigatório.</ErroFormText>
            )}

            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <Section>
                  <Text>Email:</Text>
                  <TextInputForm
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                  />
                </Section>
              )}
              name="email"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.email && (
              <ErroFormText>Esse campo é obrigatório.</ErroFormText>
            )}

            <Controller
              control={control}
              render={({onChange, onBlur, value}) => (
                <Section>
                  <Text>Phone:</Text>
                  <TextInputForm
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                  />
                </Section>
              )}
              name="phone"
              rules={{required: true}}
              defaultValue=""
            />
            {errors.phone && (
              <ErroFormText>Esse campo é obrigatório.</ErroFormText>
            )}
          </ScrollContent>
          <View>
            <Button
              text="Submit"
              color={colors.blueLight}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </ModalContainer>
      </Modal>

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
          {actions ? (
            <Section>
              <Text>Selecione o cliente:</Text>
              <Picker
                selectedValue={userSelectedIndex}
                onValueChange={(_, itemIndex) => setUserSelectedIndex(itemIndex)}>
                {users.map((user, i) => (
                  <Picker.Item key={i} label={user.fullName} value={i} />
                ))}
              </Picker>
            </Section>
          ) : (
            <Section>
              <Text>Cliente</Text>
              <Text>Nome: {booking.client?.fullName}</Text>
              <Text>Email: {booking.client?.email}</Text>
              <Text>Telefone: {booking.client?.phone}</Text>
            </Section>
          )}
        </ScrollContent>
      </ScrollView>
      {actions && (
        <>
          <Button
            color={colors.gray}
            text="Cadastrar novo cliente"
            onPress={() => {
              setModalVisible(true);
            }}
          />
          {users.length > 0 && (
            <Button
              color={colors.blueLight}
              text="Finalizar"
              onPress={() => {
                updateBooking();
              }}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default DetailsScreen;
