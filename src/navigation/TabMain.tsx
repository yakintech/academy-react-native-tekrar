import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductStack from './stack/ProductStack';

const Tab = createBottomTabNavigator();


const TabMain = () => {
  return (<>
    <Tab.Navigator>
      <Tab.Screen
        name='products'
        component={ProductStack}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="home" size={26} />,
          headerShown:false
        }}
      />
      <Tab.Screen
        name='profile'
        component={ProfileScreen} />
    </Tab.Navigator>
  </>
  )
}

export default TabMain



const ProfileScreen = () => {
  return <>
    <Text>Profile Screen</Text>
  </>
}