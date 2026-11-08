import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import First from './Components/First.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
