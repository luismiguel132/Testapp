import axios from 'axios';

const API_KEY = 'e6402d1ed6e04bd84cd6a3db6ee45381'; 
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

const tmdb = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: 'pt-BR',
    },
});

export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    genre_ids: number[];
    adult: boolean;
    original_language: string;
    original_title: string;
    popularity: number;
}

export interface MovieResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export const getMovies = async (page: number = 1): Promise<Movie[]> => {
    try {
        const response = await tmdb.get<MovieResponse>('/discover/movie', {
            params: {page}
        })
        console.log('filmes caregados com sucesso', response.data.results.length)
        return response.data.results;
    } catch (error) {
        console.error('Erro ao buscar filmes populares:', error);
        throw error;
    }
}

export const searchMovies = async (query: string, page: number = 1): Promise<Movie[]> => {
    try {
        const response = await tmdb.get<MovieResponse>('/search/movie', {
            params: { 
                query,
                page,
                include_adult: false
            }
        });
        console.log('Busca realizada com sucesso:', response.data.results.length, 'filmes encontrados');
        return response.data.results;
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        throw error;
    }
};

export const getTopRatedMovies = async (page: number = 1): Promise<Movie[]> => {
    try {
        const response = await tmdb.get<MovieResponse>('/movie/top_rated', {
            params: { page }
        });
        return response.data.results;
    } catch (error) {
        console.error('Erro ao buscar filmes mais bem avaliados:', error);
        throw error;
    }
};

export const getNowPlayingMovies = async (page: number = 1): Promise<Movie[]> => {
    try {
        const response = await tmdb.get<MovieResponse>('/movie/now_playing', {
            params: { page }
        });
        return response.data.results;
    } catch (error) {
        console.error('Erro ao buscar filmes em cartaz:', error);
        throw error;
    }
};