import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'
import { Image, StyleSheet, View } from 'react-native'
import { Button, Text } from '@react-native-material/core'
const imgPath = '../../../assets'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} variant='h5'>Мой персональный блог!</Text>
      <Image style={styles.img} width={250} source={require(`${imgPath}/images/autumn.png`)} />
      <Button
        style={styles.button}
        color="#FFC25B"
        tintColor="#fff"
        title="Читать статьи"
        onPress={() => navigation.navigate('Articles')}
      />
      <ExpoStatusBar color="#FFC25B" />
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
  text: {
    position: "absolute",
    top: 50,
    fontWeight: '700',
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
