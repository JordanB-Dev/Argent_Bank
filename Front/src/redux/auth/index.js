import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  credentials: {},
  isAuth: false,
  token: null,
  status: 'idle',
  error: null,
}

export const getCredentials = createAsyncThunk(
  'auth/getCredentials',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_URL}/api/v1/user/login`,
        credentials,
      )
      return response.data
    } catch (error) {
      return rejectWithValue(error.code)
    }
  },
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userCredentials: (state, action) => {
      state.credentials = action.payload
    },
    logout: (state) => Object.assign(state, initialState),
  },
  extraReducers(builder) {
    builder
      .addCase(getCredentials.fulfilled, (state, { payload }) => {
        state.status = 'succeeded'
        state.token = payload.body.token
        state.isAuth = true
      })
      .addCase(getCredentials.rejected, (state, action) => {
        state.status = 'failed'
        state.isAuth = false
        if (action.payload === 'ERR_NETWORK') {
          state.error = action.error.message
        } else if (action.payload === 'ERR_BAD_REQUEST') {
          state.error = 'The username or password are incorrect...'
        }
      })
  },
})

export const { userCredentials, logout } = authSlice.actions

export const authReducer = authSlice.reducer
