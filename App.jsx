import React from 'react';
import MyStack from './navigation/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
}

export default App;
