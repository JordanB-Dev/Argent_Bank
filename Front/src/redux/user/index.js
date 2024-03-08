import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  createdAt: null,
  updatedAt: null,
}

export const fetchUserData = createAsyncThunk(
  'user/getUserState',
  async (token) => {
    const response = await axios({
      method: 'post',
      url: `${import.meta.env.VITE_URL}/api/v1/user/profile`,
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data.body
  },
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUserState: (state) => Object.assign(state, initialState),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, { payload }) => {
      state.id = payload.id
      state.email = payload.email
      state.firstName = payload.firstName
      state.lastName = payload.lastName
      state.createdAt = payload.createdAt
      state.updatedAt = payload.updatedAt
    })
  },
})

export const { resetUserState } = userSlice.actions

export const userReducer = userSlice.reducer
