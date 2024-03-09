import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCredentials } from '../../redux/auth'

const LoginFrom = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const authStatus = useSelector((state) => state.auth.status)
  const authError = useSelector((state) => state.auth.error)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const credentials = {
    email: email,
    password: password,
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await dispatch(getCredentials(credentials))

    if (authStatus === 'succeeded') {
      await navigate('/profile')
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          required
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button className="sign-in-button">Sign In</button>
      {authError && <p className="errorMessage">{authError}</p>}
    </form>
  )
}

export default LoginFrom
