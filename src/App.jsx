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
import Blog1 from './components/blogs/Blog1'
import Blog2 from './components/blogs/Blog2'
import Blog3 from './components/blogs/Blog3'
import Blog4 from './components/blogs/Blog4'
import Blog5 from './components/blogs/Blog5'
import Blog6 from './components/blogs/Blog6'
import Blog7 from './components/blogs/Blog7'
import Blog8 from './components/blogs/Blog8'
import Blog9 from './components/blogs/Blog9'
import Blog10 from './components/blogs/Blog10'

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
      <Route path='/blog1' element={<Blog1/>}/>
      <Route path='/blog2' element={<Blog2/>}/>
      <Route path='/blog3' element={<Blog3/>}/>
      <Route path='/blog4' element={<Blog4/>}/>
      <Route path='/blog5' element={<Blog5/>}/>
      <Route path='/blog6' element={<Blog6/>}/>
      <Route path='/blog7' element={<Blog7/>}/>
      <Route path='/blog8' element={<Blog8/>}/>
      <Route path='/blog9' element={<Blog9/>}/>
      <Route path='/blog10' element={<Blog10/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
