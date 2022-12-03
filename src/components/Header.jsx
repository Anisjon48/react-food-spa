import { Link } from "react-router-dom"

export function Header() {
	return <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">React Shop</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </div>
  </nav>
}