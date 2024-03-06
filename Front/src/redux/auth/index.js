import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  token: null,
  status: 'idle',
  error: null,
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})
