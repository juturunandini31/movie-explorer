import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Grid, Avatar, Divider } from '@mui/material';
import { useMovieList } from '../context/MovieListContext';
import { fetchMovieDetails, fetchCredits, fetchSimilarMovies } from '../api/tmdb';
import MovieSection from '../components/MovieSection';
import StarIcon from '@mui/icons-material/Star';

const MovieDetails = () => {
  const { id } = useParams();
  const { myList, addToMyList, removeFromMyList } = useMovieList();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const movieData = await fetchMovieDetails(id);
        const creditData = await fetchCredits(id);
        const similarData = await fetchSimilarMovies(id);

        setMovie(movieData);
        setCredits(creditData);
        setSimilarMovies(similarData?.results || []);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
    loadData();
  }, [id]);

  if (!movie || !credits) return <Typography>Loading...</Typography>;

  const isInMyList = myList?.some(m => m.id === movie.id);
  const director = credits?.crew?.find(person => person.job === 'Director');

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            sx={{ width: '100%', borderRadius: 2 }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h3">{movie.title}</Typography>
          <Box display="flex" alignItems="center" mt={1} mb={2}>
            <StarIcon color="warning" />
            <Typography variant="h6" ml={1}>
              {movie.vote_average?.toFixed(1)} ({movie.vote_count} votes)
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>{movie.overview}</Typography>

          <Button
            variant="contained"
            color={isInMyList ? 'error' : 'primary'}
            onClick={() => isInMyList ? removeFromMyList(movie.id) : addToMyList(movie)}
            sx={{ mt: 2 }}
          >
            {isInMyList ? 'Remove from My List' : 'Add to My List'}
          </Button>

          {director && (
            <Box mt={3}>
              <Typography variant="h6">Director: {director.name}</Typography>
            </Box>
          )}

          {credits?.cast?.length > 0 && (
            <Box mt={3}>
              <Typography variant="h6" mb={2}>Cast</Typography>
              <Box display="flex" overflow="auto" gap={2}>
                {credits.cast.slice(0, 10).map(person => (
                  <Box key={person.id} textAlign="center">
                    <Avatar
                      src={
                        person.profile_path
                          ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
                          : ''
                      }
                      sx={{ width: 80, height: 80, mx: 'auto' }}
                    />
                    <Typography variant="body2">{person.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {person.character}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      {similarMovies.length > 0 && (
        <MovieSection title="Similar Movies" movies={similarMovies} />
      )}
    </Box>
  );
};

export default MovieDetails;
