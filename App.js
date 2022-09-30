import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './containers/Page/Home/Home'
import Articles from './containers/Page/Articles/Articles'
import Minox from './containers/Page/Minox/Minox'

const Drawer = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Articles" component={Articles} />
        <Drawer.Screen name="Minox" component={Minox} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
