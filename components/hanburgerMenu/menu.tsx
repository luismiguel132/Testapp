import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, Animated, StyleSheet } from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';

interface HamburgerMenuProps {
    onProfilePress?: () => void;
    onSettingsPress?: () => void;
}

export default function HamburgerMenu({ onProfilePress, onSettingsPress }: HamburgerMenuProps) {
    const [isVisible, setIsVisible] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(-250)).current;

    const openMenu = () => {
        setIsVisible(true);
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            })
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
                toValue: -250,
                duration: 300,
                useNativeDriver: true,
            })
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
            {/* Botão do menu hamburger */}
            <TouchableOpacity 
                style={styles.hamburgerButton} 
                onPress={openMenu}
                activeOpacity={0.7}
            >
                <Icon name="menu" size={26} color="#002619" />
            </TouchableOpacity>

            {/* Modal do menu */}
            <Modal
                visible={isVisible}
                transparent={true}
                animationType="none"
                onRequestClose={closeMenu}
            >
                <Animated.View 
                    style={[
                        styles.overlay,
                        { opacity: fadeAnim }
                    ]}
                >
                    <TouchableOpacity 
                        style={styles.overlayTouchable} 
                        activeOpacity={1} 
                        onPress={closeMenu}
                    />
                    
                    <Animated.View 
                        style={[
                            styles.menuContainer, 
                            { transform: [{ translateX: slideAnim }] }
                        ]}
                    >
                        <TouchableOpacity 
                            style={styles.closeButton} 
                            onPress={closeMenu}
                        >
                            <Icon name="x" size={26} color="#666" />
                        </TouchableOpacity>

                        <View style={styles.menuContent}>
                            <TouchableOpacity 
                                style={styles.menuItem} 
                                onPress={handleProfilePress}
                                activeOpacity={0.7}
                            >
                                <View style={styles.iconContainer}>
                                    <Icon name="user" size={22} color="#002619" />
                                </View>
                                <Text style={styles.menuText}>Perfil</Text>
                            </TouchableOpacity>

                            <View style={styles.separator} />

                            <TouchableOpacity 
                                style={styles.menuItem} 
                                onPress={handleSettingsPress}
                                activeOpacity={0.7}
                            >
                                <View style={styles.iconContainer}>
                                    <Icon name="settings" size={22} color="#002619" />
                                </View>
                                <Text style={styles.menuText}>Configurações</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                </Animated.View>
            </Modal>
        </>
    );
}

