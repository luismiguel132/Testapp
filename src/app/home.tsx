import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator, Alert } from 'react-native';
import { router } from "expo-router";
import { getMovies, searchMovies } from '@/src/services/tmdb';
import { useEffect, useState } from 'react';
import SearchBar from '../components/navbar';
import HamburgerMenu from '../components/hanburgerMenu/menu';

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
}

export default function home() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [isSearching, setIsSearching] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        loadMovies();
    }, []);

    const loadMovies = async () => {
        try {
            setLoading(true);
            const movies = await getMovies();
            setMovies(movies);
        } catch (error) {
            console.error('Erro ao carregar filmes:', error);
            Alert.alert('Erro', 'Não foi possível carregar os filmes. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (query: string) => {
        try {
            setIsSearching(true);
            setSearchQuery(query);
            const searchResults = await searchMovies(query);
            setMovies(searchResults);
            
            if (searchResults.length === 0) {
                Alert.alert('Nenhum resultado', 'Nenhum filme encontrado para sua busca.');
            }
        } catch (error) {
            console.error('Erro ao buscar filmes:', error);
            Alert.alert('Erro', 'Não foi possível realizar a busca. Tente novamente.');
        } finally {
            setIsSearching(false);
        }
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        setIsSearching(false);
        loadMovies();
    };

    const handleProfilePress = () => {
        Alert.alert('Perfil', 'Navegar para tela de perfil');
        // router.navigate("/profile");
    };

    const handleSettingsPress = () => {
        Alert.alert('Configurações', 'Navegar para tela de configurações');
        // router.navigate("/settings");
    };

    const renderMovie = ({ item }: { item: Movie }) => (
        <View style={styles.movieCard}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
                style={styles.poster}
            />
            <View style={styles.movieInfo}>
                <Text style={styles.movieTitle}>{item.title}</Text>
                <Text style={styles.movieYear}>
                    {item.release_date ? new Date(item.release_date).getFullYear() : 'Ano não informado'}
                </Text>
                <Text style={styles.movieRating}>
                    ⭐ {item.vote_average ? item.vote_average.toFixed(1) : 'N/A'}
                </Text>
                <Text style={styles.movieOverview} numberOfLines={3}>
                    {item.overview || 'Sinopse não disponível'}
                </Text>
            </View>
        </View>
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#002619" />
                <Text style={styles.loadingText}>Carregando filmes...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Search Flix</Text>
                <HamburgerMenu 
                    onProfilePress={handleProfilePress}
                    onSettingsPress={handleSettingsPress}
                />
            </View>
            
            <Text style={styles.subtitle}>
                {searchQuery ? `Resultados para: "${searchQuery}"` : 'Filmes'}
            </Text>

            <SearchBar onSearch={handleSearch} onClear={handleClearSearch} />

            {isSearching ? (
                <View style={styles.searchingContainer}>
                    <ActivityIndicator size="small" color="#002619" />
                    <Text style={styles.searchingText}>Buscando...</Text>
                </View>
            ) : (
                <FlatList
                    data={movies}
                    renderItem={renderMovie}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.moviesList}
                    onRefresh={searchQuery ? () => handleSearch(searchQuery) : loadMovies}
                    refreshing={loading}
                    ListEmptyComponent={
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>
                                {searchQuery ? 'Nenhum filme encontrado' : 'Nenhum filme disponível'}
                            </Text>
                        </View>
                    }
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E2E9E6',
        paddingTop: 60,
        paddingLeft: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    title: {
        color: '#002619',
        fontSize: 32,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    subtitle: {
        color: '#002619',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: '#E2E9E6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingText: {
        color: '#002619',
        fontSize: 16,
        marginTop: 10,
    },
    searchingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    searchingText: {
        color: '#002619',
        fontSize: 16,
        marginLeft: 10,
    },
    moviesList: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    movieCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 15,
        padding: 15,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    poster: {
        width: 80,
        height: 120,
        borderRadius: 8,
        marginRight: 15,
    },
    movieInfo: {
        flex: 1,
        justifyContent: 'space-between',
    },
    movieTitle: {
        color: '#002619',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    movieYear: {
        color: '#666',
        fontSize: 14,
        marginBottom: 5,
    },
    movieRating: {
        color: '#ff6b35',
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
    },
    movieOverview: {
        color: '#333',
        fontSize: 12,
        lineHeight: 16,
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    emptyText: {
        color: '#666',
        fontSize: 16,
        textAlign: 'center',
    },
});