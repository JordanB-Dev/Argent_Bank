import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserState } from '../../redux/user'

const Profile = () => {
  const dispatch = useDispatch()

  const token = useSelector((state) => state.auth.token)
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(fetchUserState(token))
  }, [dispatch, token])

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user.firstName} {user.lastName}
        </h1>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account"></section>
    </main>
  )
}

export default Profile
