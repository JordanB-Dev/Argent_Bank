import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserState } from '../../redux/user'
import Account from '../../components/Account'

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
      <Account
        title="Argent Bank Checking (x8349)"
        price="$2,082.79"
        desc="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        price="$10,928.42"
        desc="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        price="$184.30"
        desc="Current Balance"
      />
    </main>
  )
}

export default Profile
