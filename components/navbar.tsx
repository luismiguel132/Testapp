import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface SearchBarProps {
    onSearch: (query: string) => void;
    onClear: () => void;
}

export default function SearchBar({ onSearch, onClear }: SearchBarProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        if (searchQuery.trim()) {
            onSearch(searchQuery.trim());
        }
    };

    const handleClear = () => {
        setSearchQuery('');
        onClear();
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Pesquisar filme" 
                    placeholderTextColor="#888"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    onSubmitEditing={handleSearch}
                    returnKeyType="search"
                />
                <TouchableOpacity 
                    activeOpacity={0.78} 
                    style={styles.button}
                    onPress={handleSearch}
                >
                    <Text style={styles.buttonText}>🔍</Text>
                </TouchableOpacity>
                {searchQuery.length > 0 && (
                    <TouchableOpacity 
                        activeOpacity={0.78} 
                        style={styles.clearButton}
                        onPress={handleClear}
                    >
                        <Text style={styles.buttonText}>✕</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E2E9E6',
        padding: 10,
        width: '100%',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        width: '80%'
    },
    input: {
        marginLeft: 3,
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    button: {
        padding: 10,
        backgroundColor: '#0c9867ff',
        borderRadius: 5,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    clearButton: {
        padding: 10,
        backgroundColor: '#ff6b35',
        borderRadius: 5,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
    }
});