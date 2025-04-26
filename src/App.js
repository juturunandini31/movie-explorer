import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import MyList from './pages/MyList';
import MovieDetails from './pages/MovieDetails';
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Box display="flex">
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-list" element={<MyList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;