import './style.css'
import { Link } from 'react-router-dom'

// essa tag pronta "Link" do react dom evita o full-reload da página
// evitando perdas de states não salvos em memória

export function Menu() {
  return (
    <nav className='menu'>
      <ul>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/about" state={'this is state from ABOUT'}>About</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/posts/10">Post ID</Link></li>
        <li><Link to="/redirect">Redirect</Link></li>
      </ul>
    </nav>
  )
}