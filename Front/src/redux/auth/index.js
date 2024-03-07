import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  credentials: {},
  isAuth: true,
  token: null,
  status: 'idle',
  error: null,
}

export const getCredentials = createAsyncThunk(
  'auth/getCredentials',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/api/v1/user/login`,
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
      .addCase(getCredentials.pending, (state) => {
        state.status = 'loading'
        state.isAuth = false
      })
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
          state.error = ' Invalid Username or Password'
        }
      })
  },
})

export const { userCredentials, logout } = authSlice.actions

export const authReducer = authSlice.reducer
