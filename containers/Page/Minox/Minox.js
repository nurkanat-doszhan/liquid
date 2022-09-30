import { StyleSheet, View } from 'react-native'
import { Text } from "@react-native-material/core"

export default function Minox() {
  return (
    <View style={styles.container}>
      <Text variant='h4' style={styles.h4}>Про миноксидил</Text>
      <Text variant="body2">Оптимальный курс миноксидила для бороды — 6 месяцев.
          В этом случае вероятность «отката» минимальна.</Text>
      <Text variant="body2">Другая причина выпадения волос — резкая отмена миноксидила.
          Если вы наносили его 2 раза в день, сократите до 1 раза на протяжении
          7-14 дней. Следующий этап — применение средства 1 раз в 2-3 дня.
          Постепенно увеличивайте интервал, пока он не дойдет до 7-10 дней.
          Тогда можно отменить миноксидил.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  h4: {
    marginBottom: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: '500',
    borderBottomWidth: 3,
    borderBottomColor: '#efca01'
  },
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
