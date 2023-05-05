import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tab from './src/navigation/TabMain'
import ProductListWithSectionList from './src/navigation/screens/product/ProductListWithSectionList'
import ProductListScreen from './src/navigation/screens/product/ProductListScreen'

const App = () => {
  return (<>

    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  </>
  )
}

export default App