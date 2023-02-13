import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@testing-library/jest-dom/extend-expect';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
