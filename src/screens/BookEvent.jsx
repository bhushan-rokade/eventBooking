import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {colors, font, routes} from '../utils/constants';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import LeftArrowIcon from '../icons/LeftArrowIcon';
import {useNavigation} from '@react-navigation/native';
import Input from '../components/BookEvent/Input';
import QuantityInput from '../components/BookEvent/QuantityInput';
import {useDispatch} from 'react-redux';
import {addBooking} from '../redux/slices/bookingSlice';

const BookEvent = ({route}) => {
  const dispatch = useDispatch();
  const data = route.params;
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [qty, setQty] = useState(0);
  const handleSubmit = () => {
    const data2 = {
      name: name,
      email: email,
      quantity: qty,
      eventData: data,
    };
    console.log(data2);
    dispatch(addBooking(data2));
    Alert.alert('Successful', 'Your Booking Is Done.', [
      {
        text: 'Ok',
        onPress: () => {
          navigation.navigate(routes.HOME);
        },
      },
    ]);
  };
  return (
    <>
      <StatusBar
        backgroundColor={colors.screenbackground}
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftArrowIcon />
          </TouchableOpacity>
          <Text style={styles.heading}>Book Event</Text>
        </View>
        <View style={styles.inputView}>
          <Input
            placeholder={'Enter Your Name'}
            label={'Name'}
            inputMode={'text'}
            fun={setName}
          />
          <Input
            placeholder={'Enter Your Email '}
            label={'Email'}
            inputMode={'email'}
            fun={setEmail}
          />
          <QuantityInput
            placeholder={'Quantity '}
            label={'Quantity'}
            fun={setQty}
          />
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.btnSbmt}
            onPress={() => handleSubmit()}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnCancel}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={styles.btnText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btnCancel: {
    width: moderateScale(120),
    height: moderateVerticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(15),
    backgroundColor: '#f07067',
  },
  btnSbmt: {
    width: moderateScale(120),
    height: moderateVerticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(15),
    backgroundColor: colors.linkblue,
  },
  btnView: {
    flexDirection: 'row',
    marginTop: moderateVerticalScale(40),
    marginHorizontal: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(20),
  },
  btnText: {
    color: colors.screenbackground,
    fontFamily: font.bold,
    fontSize: scale(15),
  },
  inputView: {
    marginTop: moderateVerticalScale(30),
    marginHorizontal: moderateScale(20),
    gap: moderateVerticalScale(20),
  },
  heading: {
    fontFamily: font.bold,
    color: colors.grey,
    fontSize: scale(20),
    marginLeft: moderateScale(10),
  },
  headerView: {
    marginHorizontal: moderateScale(25),
    marginTop: moderateVerticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.screenbackground,
    marginTop: moderateVerticalScale(35),
  },
});

export default BookEvent;
