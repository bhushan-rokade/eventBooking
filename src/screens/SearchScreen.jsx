import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {colors, font} from '../utils/constants';
import SingleList from '../components/Home/SingleList';
import {useNavigation} from '@react-navigation/native';
import LeftArrowIcon from '../icons/LeftArrowIcon';

export default function SearchScreen({route}) {
  const param = route.params;
  const navigation = useNavigation();
  const data = param.data;
  const text = param.text.toLowerCase();
  const filteredData = data.filter(item =>
    item.eventName.toLowerCase().includes(text),
  );

  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftArrowIcon size={scale(20)} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>Search results for "{text}"</Text>
        <Text style={styles.matched}>{filteredData.length} Results</Text>
        <View style={styles.bookingListWrapper}>
          <FlatList
            renderItem={({item}) => (
              <SingleList item={item} navigation={navigation} />
            )}
            data={filteredData}
            keyExtractor={item => item.id.toString()}
            style={{flexWrap: 'wrap', flexDirection: 'row'}}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  matched: {
    color: colors.grey,
    marginHorizontal: moderateScale(20),
    marginTop: moderateVerticalScale(20),
    fontFamily: font.semiBold,
    fontSize: scale(15),
  },
  bookingListWrapper: {
    marginTop: moderateVerticalScale(15),
  },
  heading: {
    color: colors.grey,
    marginHorizontal: moderateScale(20),
    marginTop: moderateVerticalScale(20),
    fontFamily: font.bold,
    fontSize: scale(20),
  },
  headerView: {
    marginHorizontal: moderateScale(20),
    marginTop: moderateVerticalScale(10),
  },
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    flexDirection: 'column',
    backgroundColor: colors.screenbackground,
  },
});
