import { StyleSheet, View } from 'react-native'
import { ListItem, Text } from "@react-native-material/core"

export default function Articles({ navigation }) {
    return (
        <View style={styles.container}>
            <Text variant='h4' style={styles.h4}>Что-то с чем-то</Text>
            <ListItem title="Про миноксидил" onPress={() => navigation.navigate('Minox')} />
            <ListItem title="List Item" />
            <ListItem title="List Item" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    h4: {
        padding: 15,
    }
})
