import { NavLink } from 'react-router-dom'
import Logo from '../../assets/argentBankLogo.png'
import { useSelector } from 'react-redux'

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuth)
  const user = useSelector((state) => state.user)
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {isAuth ? (
          <>
            <NavLink className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {user.firstName}
            </NavLink>
            <NavLink className="main-nav-item" to="/">
              <i className="fa fa-sign-out"></i>
              Sign out
            </NavLink>
          </>
        ) : (
          <NavLink className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Header
