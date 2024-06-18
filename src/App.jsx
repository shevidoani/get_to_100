import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetInGame from './components/GetInGame'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <GetInGame />
    </div>
  )
}

export default App
