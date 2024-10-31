import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Event from './pages/Event'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/event/:id' element={<Event/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
