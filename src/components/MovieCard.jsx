import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ width: 200, m: 1 }}>
      <Link to={`/movie/${movie.id}`}>
        <CardMedia
          component="img"
          height="300"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <CardContent>
        <Typography variant="subtitle1" noWrap>{movie.title}</Typography>
        <Box display="flex" alignItems="center">
          <StarIcon color="warning" fontSize="small" />
          <Typography variant="body2" ml={0.5}>
            {movie.vote_average.toFixed(1)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;