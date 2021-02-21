import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/DetailScreen';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName="HomeScreen">
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="DetailScreen" component={DetailScreen} />
        </Drawer.Navigator>
    );
}

