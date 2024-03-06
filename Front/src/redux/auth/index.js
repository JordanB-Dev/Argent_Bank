import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  credentials: '',
  isAuth: false,
  token: null,
  status: 'idle',
  error: null,
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userCredentials(state, action) {
      state.credentials = action.payload
    },
    logout(state) {
      state.credentials = ''
      state.isAuth = false
      state.token = null
      state.status = 'idle'
      state.error = null
    },
  },
})
