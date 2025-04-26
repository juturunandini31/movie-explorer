import { createContext, useContext, useState, useEffect } from 'react';

const MovieListContext = createContext();

export const MovieListProvider = ({ children }) => {
  const [myList, setMyList] = useState(() => {
    const saved = localStorage.getItem('myMovieList');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('myMovieList', JSON.stringify(myList));
  }, [myList]);

  const addToMyList = (movie) => {
    setMyList(prev => [...prev, movie]);
  };

  const removeFromMyList = (movieId) => {
    setMyList(prev => prev.filter(movie => movie.id !== movieId));
  };

  return (
    <MovieListContext.Provider value={{ myList, addToMyList, removeFromMyList }}>
      {children}
    </MovieListContext.Provider>
  );
};

export const useMovieList = () => {
  const context = useContext(MovieListContext);
  if (!context) {
    throw new Error('useMovieList must be used within a MovieListProvider');
  }
  return context;
};