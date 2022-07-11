import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ContextProvider>
    <App tab="home" />
  </ContextProvider>,
);
