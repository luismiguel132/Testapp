import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    Animated,
    Easing,
} from 'react-native';
//@ts-ignore
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './styles';

interface HamburgerMenuProps {
    onProfilePress?: () => void;
    onSettingsPress?: () => void;
}

export default function HamburgerMenu({
    onProfilePress,
    onSettingsPress,
}: HamburgerMenuProps) {
    const [isVisible, setIsVisible] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(250)).current; // Começa fora da tela pela direita

    const openMenu = () => {
        setIsVisible(true);
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 500,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }),
        ]).start();
    };

    const closeMenu = () => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 250,
                duration: 400,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setIsVisible(false);
        });
    };

    const handleProfilePress = () => {
        closeMenu();
        onProfilePress?.();
    };

    const handleSettingsPress = () => {
        closeMenu();
        onSettingsPress?.();
    };

    return (
        <>
            <TouchableOpacity
                style={styles.hamburgerButton}
                onPress={openMenu}
                activeOpacity={0.7}
                accessibilityLabel="Abrir menu"
                disabled={isVisible}
            >
                <Feather name="menu" size={26} color="#002619" />
            </TouchableOpacity>

            <Modal
                visible={isVisible}
                transparent
                animationType="none"
                onRequestClose={closeMenu}
            >
                <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
                    <TouchableOpacity
                        style={styles.overlayTouchable}
                        activeOpacity={1}
                        onPress={closeMenu}
                    />

                    <Animated.View
                        style={[
                            styles.menuContainer,
                            { transform: [{ translateX: slideAnim }] },
                        ]}
                    >
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={closeMenu}
                            accessibilityLabel="Fechar menu"
                        >
                            <Feather name="x" size={26} color="#666" />
                        </TouchableOpacity>

                        <View style={styles.menuContent}>
                            <TouchableOpacity
                                style={styles.menuItem}
                                onPress={handleProfilePress}
                                activeOpacity={0.7}
                            >
                                <Feather name="user" size={22} color="#002619" />
                                <Text style={styles.menuText}>Perfil</Text>
                            </TouchableOpacity>

                            <View style={styles.separator} />

                            <TouchableOpacity
                                style={styles.menuItem}
                                onPress={handleSettingsPress}
                                activeOpacity={0.7}
                            >
                                <Feather name="settings" size={22} color="#002619" />
                                <Text style={styles.menuText}>Configurações</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                </Animated.View>
            </Modal>
        </>
    );
}
