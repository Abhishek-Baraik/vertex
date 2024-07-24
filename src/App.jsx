import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './components/About'
import Blog from './components/Blog'
import Home from './components/Home'
import Services from './components/Services'
import Team from './components/Team'
import Faqs from './components/Faqs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Candidates from './components/Candidates'
import Employers from './components/Employers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/candidates' element={<Candidates/>}/>
      <Route path='/faqs' element={<Faqs/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/employers' element={<Employers/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
