import { NavLink } from 'react-router-dom'
import Logo from '../../assets/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/auth'
import { resetUserState } from '../../redux/user'

const Header = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.isAuth)
  const user = useSelector((state) => state.user)

  const handleLogout = () => {
    dispatch(logout())
    dispatch(resetUserState())
  }

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
            <NavLink className="main-nav-item" to="/" onClick={handleLogout}>
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
