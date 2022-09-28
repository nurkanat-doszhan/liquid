import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Flex, Stack, Text } from "@react-native-material/core";
const imgPath = '../../../assets'
// import exampleImage from './assets/images/autumn.png';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <Text variant='h5'>Мой персональный блог</Text>
        <Image style={styles.img} width={250} source={require(`${imgPath}/images/autumn.png`)} />
        <Button
            style={styles.button}
            color="#efca01"
            tintColor="#fff"
            title="Go to Details"
            onPress={() => navigation.navigate('Minox')}
        />
        <ExpoStatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
