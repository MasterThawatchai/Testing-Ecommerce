

import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById("root");
const root = createRoot(container);

// 👇️ wrap App in Router

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
