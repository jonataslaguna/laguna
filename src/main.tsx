import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PortfolioProvider from './context/PortfolioProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PortfolioProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PortfolioProvider>
)
