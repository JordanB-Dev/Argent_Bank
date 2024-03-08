import { Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Profile from '../../pages/Profile'
import Error from '../../pages/Error'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuth)
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            isAuth ? <Navigate to="/profile" replace={true} /> : <Home />
          }
        />
        <Route
          path="/login"
          element={
            isAuth ? <Navigate to="/profile" replace={true} /> : <Login />
          }
        />
        <Route
          path="/profile"
          element={isAuth ? <Profile /> : <Navigate to="/" replace={true} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
