import { Stack, router } from 'expo-router';
import { AuthProvider, useAuth } from '../contexts/AuthContext'
import { useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function RootLayout() {
    return(
        <AuthProvider>
            <MainLayout></MainLayout>
        </AuthProvider>
    )
}
function MainLayout() {
    const { setAuth } = useAuth()



    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {
            if(session){
                setAuth(session.user)
                router.replace("/home")
                return;
            }

            setAuth(null);
            router.replace("/login")
            return;
        })
    }, [])


    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen 
                name="index" 
                options={{ headerShown: false }}
            />
            
            <Stack.Screen 
                name="(auth)/login" 
                options={{ headerShown: false }}
            />
            
            <Stack.Screen 
                name="(auth)/signup" 
                options={{ headerShown: false }}
            />
            
            <Stack.Screen 
                name="home" 
                options={{ headerShown: false }}
            />
            
            <Stack.Screen 
                name="profile" 
                options={{ headerShown: false }}
            />
            
            <Stack.Screen 
                name="settings" 
                options={{ headerShown: false }}
            />
        </Stack>
    );
}