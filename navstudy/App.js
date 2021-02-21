import React from 'react';
import { NavigationContainer } from '@react-navigations/native';
import MyDrawer from './navigator/DrawerNav';

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}