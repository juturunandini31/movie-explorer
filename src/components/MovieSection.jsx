import { Box, Typography } from '@mui/material';
import MovieCard from './MovieCard';

const MovieSection = ({ title, movies }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, ml: 1 }}>{title}</Typography>
      <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, p: 1 }}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Box>
    </Box>
  );
};

export default MovieSection;