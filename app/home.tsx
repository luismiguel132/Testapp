import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button_bac } from '@/components/buttom_bac/buttom';
import { Button } from '@/components/buttom/buttom';
import { router } from "expo-router"


export default function home() {

    const goBack = () => {
        router.back();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vimdo</Text>
            <Text style={styles.text}>Ao meu app</Text>
            <Button_bac title='voltar' onPress={goBack}></Button_bac>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E2E9E6',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25,
    },
    title: {
        color: '#002619',
        fontSize: 38,
        width: "100%",
        textAlign: 'center',
        position: 'absolute',
        top: 100,
    },
    text: {
        color: '#002619',
        fontSize: 18,
        width: "100%",
        textAlign: 'center',
        position: 'absolute',
        top: 150,
    }
})