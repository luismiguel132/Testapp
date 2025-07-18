import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button_bac } from '@/components/buttom_bac/buttom';
import { Button } from '@/components/buttom/buttom';
import {router } from "expo-router"

export default function Login() {


    const goBack = () => {
        router.back();
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            
            <TextInput style={styles.input} placeholder='Email' keyboardType='email-address' />
            <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} />
            <Button title='Entrar'  />
            <Button_bac title='Voltar' onPress={goBack} />
        </View>
    );
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
        fontSize: 24,
        marginBottom: 30,
        width: "100%",
        textAlign: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
    }
});