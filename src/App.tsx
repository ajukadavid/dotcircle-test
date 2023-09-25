import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Choose from './Choose'
import Prompt from './Prompt'
import Footer from './Footer'
function App() {

  return (
    <>
      <div className='bg-black'>
      <Navbar />
      <Hero />
      <Services />
      <Choose />
      <Prompt />
      <Footer />
      </div>
      
    </>
  )
}

export default App
