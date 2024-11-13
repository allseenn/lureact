import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
        <ul>
            <li><NavLink to="/">Main</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
    </nav>
  )
}
