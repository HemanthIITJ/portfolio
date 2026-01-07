import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/global.css'

/**
 * Application Entry Point
 * Utilizes React 18 concurrent features for optimal performance
 * Strict mode enabled for development-time checks
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
