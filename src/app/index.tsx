import { StyleSheet, Text, View, Image } from 'react-native';
import { Button_bac} from '../components/buttom_bac/buttom'
import { Button } from '../components/buttom/buttom'
import {router } from "expo-router"


export default function Index() { 


        function hendleLogin () {
        router.navigate("/login");
    }
        function hendleRegister () {
        router.navigate("/cadastro");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{"</dev>"}</Text>
            <Image
                source={require('../assets/images/Capivara estilosa com celular.png')}
                style={styles.image}
            />

            <Button_bac title='cadastrar' onPress={hendleRegister} />
            <Button title='entrar' onPress={hendleLogin}  />
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
        fontSize: 38,
        width: "100%",
        textAlign: 'center',
        position: 'absolute',
        top: 100,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 30,
    },
});