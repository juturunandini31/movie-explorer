const API_URL = process.env.REACT_APP_TMDB_BASE_URL;
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`
  }
};

const fallbackData = {
  nowPlaying: require('./fallback/nowPlaying.json'),
  popular: require('./fallback/popular.json'),
  topRated: require('./fallback/topRated.json'),
  upcoming: require('./fallback/upcoming.json'),
  similar: require('./fallback/similar.json'),
  movieDetails: require('./fallback/movieDetails.json'),
  credits: require('./fallback/credits.json')
};

export const fetchMovies = async (category) => {
  try {
    const response = await fetch(`${API_URL}/movie/${category}?language=en-US&page=1`, options);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${category} movies:`, error);
    return fallbackData[category] || { results: [] };
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${API_URL}/movie/${movieId}?language=en-US`, options);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return fallbackData.movieDetails;
  }
};

export const fetchCredits = async (movieId) => {
  try {
    const response = await fetch(`${API_URL}/movie/${movieId}/credits?language=en-US`, options);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching credits:', error);
    return fallbackData.credits;
  }
};

export const fetchSimilarMovies = async (movieId) => {
  try {
    const response = await fetch(`${API_URL}/movie/${movieId}/similar?language=en-US&page=1`, options);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching similar movies:', error);
    return fallbackData.similar;
  }
};