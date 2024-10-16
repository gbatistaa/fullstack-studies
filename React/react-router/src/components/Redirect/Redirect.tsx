import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

export function Redirect() {
  const [time, setSetTime] = useState(3)
  const timeout = useRef(0)
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current)

    timeout.current = setTimeout(() => {
      setSetTime((time) => time - 1)
    }, 1000)
    if (time <= 0) navigate('/about', {
      state: `This is the state: ${Math.random()}`
    });
  }, [time, navigate]);


  // essa funçao de navigate muda toda url depois do nome prinicpal
  // para a string que está dentro como argumento da função


  return (
    <div>
      <h1>Get out of here in: {time}</h1>
    </div>
  )
}