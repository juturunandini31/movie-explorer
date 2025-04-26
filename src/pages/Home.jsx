import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import MovieSection from '../components/MovieSection';
import { fetchMovies } from '../api/tmdb';

const Home = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      setNowPlaying((await fetchMovies('now_playing')).results);
      setPopular((await fetchMovies('popular')).results);
      setTopRated((await fetchMovies('top_rated')).results);
      setUpcoming((await fetchMovies('upcoming')).results);
    };
    loadMovies();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <MovieSection title="Now Playing" movies={nowPlaying} />
      <MovieSection title="Popular" movies={popular} />
      <MovieSection title="Top Rated" movies={topRated} />
      <MovieSection title="Upcoming" movies={upcoming} />
    </Box>
  );
};

export default Home;