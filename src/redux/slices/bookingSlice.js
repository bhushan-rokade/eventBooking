import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

// Fetch async item and initialize state asynchronously
const loadInitialState = () => {
  const Item = AsyncStorage.getItem('bookingDetails');
  return Item._k == null ? [] : JSON.parse(Item);
};

let initialState = loadInitialState(); // Await the resolved value for initialState

export const bookingSlice = createSlice({
  name: 'booking',
  initialState: initialState, // Initial state is an array
  reducers: {
    addBooking: (state, action) => {
      state.push(action.payload); // Add the new booking object into the array

      // Save updated state to AsyncStorage
      AsyncStorage.setItem('bookingDetails', JSON.stringify(state));
    },
  },
});

export const {addBooking} = bookingSlice.actions;

export default bookingSlice.reducer;
