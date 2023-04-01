import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const App = () => {
  return (
    <h1>Hello, World!</h1>
  );
};

const elem = document.getElementById('root')

if (!elem) {
    console.log('hello')
    throw new Error('Failed to find the root element')
  
  }

const root = createRoot(elem)

root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )