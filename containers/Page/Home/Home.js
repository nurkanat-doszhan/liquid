import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Flex, Stack, Text } from "@react-native-material/core";
const imgPath = '../../../assets'
// import exampleImage from './assets/images/autumn.png';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <Text variant='h5'>Мой персональный блог</Text>

        <Image source={require(`${imgPath}/images/autumn.png`)} />
        <Button
            style={styles.button}
            title="Go to Details"
            onPress={() => navigation.navigate('Minox')}
        />
        <ExpoStatusBar />
    </View>
  );
}

// function HomeScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Screen</Text>
//             <Button title="Go to Details"
//                 onPress={() => navigation.navigate('Details')} />
//         </View>
//     );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#efca01'
  }
});
