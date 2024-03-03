import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
