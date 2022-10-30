import {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './containers/Page/Home/Home'
import Articles from './containers/Page/Articles/Articles'
import Minox from './containers/Page/Minox/Minox'
import Parse from 'parse/react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text } from '@react-native-material/core'
import { TodoList } from './containers/Page/TodoList/TodoList'

Parse.setAsyncStorage(AsyncStorage)
Parse.initialize('XleXY4J0wj0YPgxfZDwyZe9yoo8ci9q3gPCHNb44',
  'wuajVD530k5R3yHZHQzTwutt81OuyqDhudrmQakV')
Parse.serverURL = 'https://parseapi.back4app.com/'

const Drawer = createNativeStackNavigator()

export default function App() {
  // const [data, setData] = useState(new Parse.Object('Posts'));
  // const [dbObjects, setDbOetObjects] = useState()
  // async function addPost() {
  //   try {
  //     const myObj = new Parse.Object("Posts");
  //     myObj.get('Title', 'fuck off');
  //     await myObj.save()
  //   } catch (error) {
  //     alert(`Failed to retrieve the object, with error code: ${error.message}`);
  //   }
  // }
  // async function fetchPost() {
  //   let query = new Parse.Query('Posts');
  //   let queryResult = await query.findAll();
  //   const currentPost = queryResult[3];
  //   for(var i = 0; i < queryResult.length; i++) {
  //     setDbOetObjects(queryResult[i])
  //   }
  //   console.log(dbObjects)
  //   setData(currentPost)
  // }
  // useEffect(() => {
  //   fetchPost()
  // }, []);

  // const DataBase = () => {
  //   return (
  //     <>
  //       <Text>{dbObjects}</Text>
  //     </>
  //   )
  // }

  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="TodoList" component={TodoList} />
        <Drawer.Screen name="Articles" component={Articles} />
        <Drawer.Screen name="Minox" component={Minox} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
