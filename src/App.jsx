import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ul>
        <li><b>Nombre:</b> Victor Hugo</li>
      <li><b>Edad:</b> 30</li>
      <li><b>Pelicula Fav:</b> Star Wars</li>
      <li><b>Musica Fav:</b> Salsita</li>
      </ul>
    </div>
  )
}

export default App
