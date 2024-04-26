import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import './scss/includes.scss'
import { Provider } from './Provaider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <main>
        <Home />
      </main>
    </Provider>
  </React.StrictMode>,
)
