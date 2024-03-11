import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserState } from '../../redux/user'
import Account from '../../components/Account'
import ProfileForm from '../../components/ProfileForm'

const Profile = () => {
  const dispatch = useDispatch()
  const [editToggle, setEditToggle] = useState(false)
  const token = useSelector((state) => state.auth.token)
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(fetchUserState(token))
  }, [dispatch, token])

  const handleToggle = (e) => {
    e.preventDefault()
    setEditToggle(!editToggle)
  }

  const accounts = [
    {
      title: 'Argent Bank Checking (x8349)',
      price: '$2,082.79',
      desc: 'Available Balance',
    },
    {
      title: 'Argent Bank Savings (x6712)',
      price: '$10,928.42',
      desc: 'Available Balance',
    },
    {
      title: 'Argent Bank Credit Card (x8349)',
      price: '$184.30',
      desc: 'Current Balance',
    },
  ]

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user.firstName} {user.lastName}
        </h1>
        {editToggle ? (
          <ProfileForm setToggle={setEditToggle} />
        ) : (
          <button className="edit-button" onClick={(e) => handleToggle(e)}>
            Edit Name
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>

      {accounts.map((account, index) => {
        return (
          <Account
            key={index}
            title={account.title}
            price={account.price}
            desc={account.desc}
          />
        )
      })}
    </main>
  )
}

export default Profile
