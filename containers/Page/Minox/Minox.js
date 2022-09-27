import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { StyleSheet, View } from 'react-native';
import { Button, Stack, Text } from "@react-native-material/core";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
        <Text>Оптимальный курс миноксидила для бороды — 6 месяцев.
            В этом случае вероятность «отката» минимальна.</Text>
        <Text>Другая причина выпадения волос — резкая отмена миноксидила.
            Если вы наносили его 2 раза в день, сократите до 1 раза на протяжении
            7-14 дней. Следующий этап — применение средства 1 раз в 2-3 дня.
            Постепенно увеличивайте интервал, пока он не дойдет до 7-10 дней.
            Тогда можно отменить миноксидил.</Text> 
        <Button
            title="Go to Minox"
            onPress={() => navigation.navigate('Home')}
        />
      <ExpoStatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
