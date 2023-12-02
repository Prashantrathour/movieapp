// services/api.js
import axios from 'axios';

const API_KEY = '263d22d8'; // Get your API key from OMDB

export const searchMovies = async (query) => {
  const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
  return response.data.Search || [];
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f2193c6e6fa7b3c6a83188ac4746dcfd`);
  return response.data;
};
export const getallmovies = async (page=1) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=f2193c6e6fa7b3c6a83188ac4746dcfd&&page=${page}`);
  return response.data;
};
export const searchmovie = async (query) => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&&api_key=f2193c6e6fa7b3c6a83188ac4746dcfd`);
  return response.data;
};
