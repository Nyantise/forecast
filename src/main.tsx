import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalProvider from './globalProvider.tsx'
import GlobalStyle from './globalStyle'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
    <GlobalStyle />
  </React.StrictMode>,
)
