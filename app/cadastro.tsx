import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button_bac } from '@/components/buttom_bac/buttom';
import { Button } from '@/components/buttom/buttom';
import {router } from "expo-router"

export default function Login() {


    const goBack = () => {
        router.back();
    }

    function hendleRegister () {
        router.navigate("/home");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            
            <TextInput style={styles.input} placeholder='Email' keyboardType='email-address' />
            <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} />
            <TextInput style={styles.input} placeholder='Confirmar Senha' secureTextEntry={true} />
            <Button_bac title='cadastrar' onPress={hendleRegister} />
            <Button title='Voltar' onPress={goBack} />
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
        color: '#002b1cff',
        fontSize: 24,
        marginBottom: 30,
        width: "100%",
        textAlign: 'center',
        fontWeight: '700',
    },
    input: {
        width: '80%',
        height: 44,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        fontWeight: '900',
        
    }
});