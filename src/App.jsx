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
import Services1 from './components/services/Services1'
import Services2 from './components/services/Services2'
import Services3 from './components/services/Services3'
import Services4 from './components/services/Services4'
import Services5 from './components/services/Services5'
import Services6 from './components/services/Services6'

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
      <Route path='/service1' element={<Services1/>}/>
      <Route path='/service2' element={<Services2/>}/>
      <Route path='/service3' element={<Services3/>}/>
      <Route path='/service4' element={<Services4/>}/>
      <Route path='/service5' element={<Services5/>}/>
      <Route path='/service6' element={<Services6/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
