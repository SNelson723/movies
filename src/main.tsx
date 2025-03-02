import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from './pages/Home.tsx';
import Favorites from './pages/favorites/Favorites.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          {/* Nested Routes here */}
          <Route index element={<Home />} />
          <Route path='favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
