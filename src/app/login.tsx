import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { Button_bac } from '@/src/components/buttom_bac/buttom';
import { Button } from '@/src/components/buttom/buttom';
import {router } from "expo-router"
import { supabase } from '../lib/supabase';

export default function Login() {


        const [email, setemail] = useState('');
        const [password, setpassword] = useState('');
        const [loading, setLoading] = useState(false);

    const goBack = () => {
        router.back();
    }

    async function hendleLogin () {
        setLoading(true);

        const { data,error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })

        if(error){
            Alert.alert('error', error.message)
            setLoading(false)
            return;
        }

    router.replace('/home');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            
            <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={setemail} />
            <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} value={password} onChangeText={setpassword} />
            <Button_bac title='Entrar' onPress={hendleLogin} />
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
        color: '#002619',
        fontSize: 24,
        marginBottom: 30,
        width: "100%",
        textAlign: 'center',
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