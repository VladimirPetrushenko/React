import { Link } from "react-router-dom";
function Header(){
    return <nav className="light-green lighten-1">
    <div className="nav-wrapper" >
      <Link to="/" className="brand-logo">React Movies</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="https://github.com/VladimirPetrushenko/React/tree/main/firstprojectmovieapp">Repository</a></li>
      </ul>
    </div>
  </nav>
}

export {Header}