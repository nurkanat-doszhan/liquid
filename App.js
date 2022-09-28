import * as React from 'react'
import { Button, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './containers/Page/Home/Home'
import Minox from './containers/Page/Minox/Minox'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Minox" component={Minox} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
