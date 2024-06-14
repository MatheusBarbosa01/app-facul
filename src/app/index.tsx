import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from '../contexts/AuthContext';
import AppNavigator from './_Layout';

const App = () => {
  return (
    <AuthProvider>
      {/* <NavigationContainer> */}
        <AppNavigator />
      {/* </NavigationContainer> */}
    </AuthProvider>
  );
};

export default App;
