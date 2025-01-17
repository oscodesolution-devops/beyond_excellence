import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import "./index.css"
import Sidebar from './components/Sidebar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<App />} />
      <Route path='/sidebar/*' element={<Sidebar />} /> 
    </Routes>
    </BrowserRouter>
  </StrictMode>
);