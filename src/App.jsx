import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Experiance from './Components/Experiance'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
   <>
  <div>
  <Navbar/>
   <Home/>
   <About/>
   <Portfolio/>
   <Experiance/>
   <Contact/>
   <Footer/>
  </div>
  <Toaster/>
   </>
  )
}


export default App
