import { Outlet, useParams, useSearchParams } from 'react-router-dom'
import './style.css'

// Use params e useSearchParams são hooks do react router para parâmetros de URL

export function Posts() {
  const params = useParams()
  const { id } = params
  const [qs] = useSearchParams() // qs = query string

  return (
    <div>
      <h1>Post {`Param: ${id} QS: ${qs.get('segunda')}`}</h1>
      <Outlet />
    </div>
  )
}