import { NavLink } from 'react-router-dom'
import Logo from '../../assets/argentBankLogo.png'

const Header = () => {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  )
}

export default Header
