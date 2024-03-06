/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  credentials: '',
  isAuth: false,
  token: null,
  status: 'idle',
  error: null,
}

export const getCredentials = createAsyncThunk(
  'auth/getCredentials',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.URL}/api/v1/user/login`,
        credentials,
        {
          method: 'POST',
          body: JSON.stringify(credentials),
          header: {
            'Content-Type': 'application/json',
          },
        },
      )
      return response.data
    } catch (error) {
      return rejectWithValue(error.code)
    }
  },
)

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
  extraReducers(builder) {
    builder.addCase(getCredentials.pending, (state) => {
      state.status = 'loading'
      state.isAuth = false
    })
  },
})
