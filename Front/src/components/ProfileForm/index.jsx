/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/user'

const ProfileForm = ({ setToggle }) => {
  const dispatch = useDispatch()

  const token = useSelector((state) => state.auth.token)
  const user = useSelector((state) => state.user)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const newNames = {
    firstName,
    lastName,
  }

  const handleCancel = () => {
    setToggle(false)
  }

  const handleEdit = async (token, newNames) => {
    const data = { token, newNames }
    dispatch(updateUser(data))
    setToggle(false)
  }

  return (
    <>
      <div className="edit-wrapper">
        <input
          type="text"
          name="firstName"
          placeholder={user.firstName}
          defaultValue={user.firstName}
          onChange={(e) => setFirstName(e.target.value)}
          autoComplete="off"
        />
        <input
          type="text"
          name="lastName"
          placeholder={user.lastName}
          defaultValue={user.lastname}
          onChange={(e) => setLastName(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div className="edit-wrapper">
        <button
          className="edit-button"
          onClick={() => handleEdit(token, newNames)}
        >
          Save
        </button>
        <button className="edit-button" onClick={() => handleCancel()}>
          Cancel
        </button>
      </div>
    </>
  )
}

export default ProfileForm
