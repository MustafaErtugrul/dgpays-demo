import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FavoriteProvider } from './contextSample/favoritesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <FavoriteProvider>
      <App></App>
    </FavoriteProvider>
  </BrowserRouter>

);
