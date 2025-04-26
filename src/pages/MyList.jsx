import { Box, Typography } from '@mui/material';
import { useMovieList } from '../context/MovieListContext';
import MovieCard from '../components/MovieCard';

const MyList = () => {
  const { myList } = useMovieList();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={3}>My List</Typography>
      {myList.length === 0 ? (
        <Typography>Your list is empty. Add some movies!</Typography>
      ) : (
        <Box display="flex" flexWrap="wrap">
          {myList.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MyList;