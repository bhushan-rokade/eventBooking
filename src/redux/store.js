import {configureStore} from '@reduxjs/toolkit';
import bookingReducer from './slices/bookingSlice';

export const store = configureStore({
  reducer: {
    bookings: bookingReducer,
  },
});
