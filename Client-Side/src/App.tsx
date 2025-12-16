import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
    localStorage.setItem("theme", themeMode);
  }, [themeMode])

  const handleClick = () => {
    setThemeMode(prev => prev === "light" ? "dark" : "light")
  }

  return (
    <>
      <div className='homepage'>
        <button onClick={handleClick}>Switch</button>
        
      </div>

    </>
  )
}

export default App
