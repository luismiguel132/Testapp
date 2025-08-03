import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import { Button_bac } from '@/src/components/buttom_bac/buttom';
import { Button } from '@/src/components/buttom/buttom';
import {router } from "expo-router"
import { supabase } from '../lib/supabase'

export default function cadastro() {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [loading, setLoading] = useState(false)

    const goBack = () => {
        router.back();
    }

    async function hendleRegister () {

        setLoading(true);

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options:{
                data:{
                    name: name,
                }
            }
        })

        if(error){
            Alert.alert('error', error.message)
            setLoading(false);
            return;
        }

        router.replace('/login');
    }

    return (

        <View style={styles.container}>
        
            <Text style={styles.title}>Cadastro</Text>

            <TextInput style={styles.input} placeholder='nome'  onChangeText={setname} />

            <TextInput style={styles.input} placeholder='Email' keyboardType='email-address' onChangeText={setemail}  />

            <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} onChangeText={setpassword} />

            <Button_bac title={loading? 'caregando...' : 'criar conta'} onPress={hendleRegister} />

            <Button title={'Voltar'} onPress={goBack} />

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