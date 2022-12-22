import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css"

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar">
      <span className="right">Welcome, {user.name}</span>
      &nbsp;&nbsp;
      |
      &nbsp;&nbsp;
      <Link to="/">Home</Link>
      &nbsp;&nbsp;
      |
      &nbsp;&nbsp;
      <Link to="/wishlist">Visit Wishlist</Link>
      &nbsp;&nbsp;
      |
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}