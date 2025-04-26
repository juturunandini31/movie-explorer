import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MovieListProvider } from './context/MovieListContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieListProvider>
      <App />
    </MovieListProvider>
  </React.StrictMode>
);