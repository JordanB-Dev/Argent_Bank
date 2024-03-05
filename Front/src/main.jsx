import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { auth } from './redux/auth'
import App from './components/App'
import './assets/styles/style.css'

const state = {}

const store = configureStore({
  preloadedState: state,
  reducer: combineReducers({
    auth: auth.reducer,
  }),
})

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
