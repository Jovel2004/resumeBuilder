import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import ResumeGenerator from './pages/ResumeGenerator'
import UserForm from './pages/UserForm'
import History from './pages/History'
import PageNF from './pages/PageNF'
import Header from './components/Header'
import Footer from './components/Footer'

Routes
function App() {

  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/resume' element={<ResumeGenerator/>}/>
        <Route path='/form' element={<UserForm/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/*' element={<PageNF/>}/>
    </Routes>
    <Footer/>

    </>
  )
}

export default App
