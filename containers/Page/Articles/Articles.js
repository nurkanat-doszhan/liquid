import { StyleSheet, View } from 'react-native'
import { ListItem, Snackbar, Text } from "@react-native-material/core"
import { useEffect, useState } from 'react';

export default function Articles({ navigation }) {
    const [snackBarView, setSnackBarView] = useState(false)
    const [liDis, setLiDis] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/github")
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result.login);
            },
            (error) => {
                return error
            }
        )
    }, [])

    let cl = () => {
        setLiDis(true)
        setSnackBarView(true)
        setTimeout(() => {
            setLiDis(false)
            setSnackBarView(false)
        }, 2000)
    }
    return (
        <View style={styles.container}>
            <Text variant='h4' style={styles.h4}>Что-то с чем-то</Text>
            <ListItem title="Про миноксидил" onPress={() => navigation.navigate('Minox')} />
            <ListItem title="List Item" onPress={() => navigation.navigate('TodoList')} />
            <ListItem title="List Item" onPress={cl} disabled={liDis} />
            { snackBarView &&
                <Snackbar
                    message="Там ничего нет"
                    style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
                />
            }
            <Text>{items}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    h4: {
        padding: 15,
    }
})
