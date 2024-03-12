import './App.css'
// import Navbar from './components/NavBar/Navbar'
// import FooterComponent from './components/FooterComponent'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/home/Home'
import Layout from './components/Layout/Layout'
import Features from './pages/product/Product'
import Contact from './pages/contact/Contact'
import About from './components/about/About'

// import SubHero from './pages/home/SubHero'
// import Cards from './pages/home/Cards'
// import Services from './pages/home/Services'
// import Subscribe from './pages/home/Subscribe'


function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout> <Home /> </Layout> } />
          <Route path='/features' element={<Layout> <Features /> </Layout> } />
          <Route path='/about' element={<Layout> <About/> </Layout> } />
          <Route path='/Contact' element={<Layout> <Contact/> </Layout>} />
          

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
