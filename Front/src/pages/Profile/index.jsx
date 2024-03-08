import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserState } from '../../redux/user'

const Profile = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    dispatch(fetchUserState(token))
  }, [dispatch, token])

  return <h1>Profile</h1>
}

export default Profile
