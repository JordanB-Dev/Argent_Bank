import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  createdAt: null,
  updatedAt: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUserState: (state) => Object.assign(state, initialState),
  },
  extraReducers: (builder) => {
    builder
  },
})

export const { resetUserState } = userSlice.actions

export const userReducer = userSlice.reducer
