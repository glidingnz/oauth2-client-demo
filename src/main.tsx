import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Private from './private'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { AuthProvider } from 'react-oauth2-code-pkce';
import { authConfig } from './config';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider authConfig={authConfig}>
      <Private />
    </AuthProvider>
  </StrictMode>,
);
